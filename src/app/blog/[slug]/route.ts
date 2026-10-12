import { getOffgridPost } from "@/data/offgrid-posts";
import { DATA } from "@/data/resume";
import { createHmac, timingSafeEqual } from "crypto";
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export const dynamic = "force-dynamic";

const HEADERS = {
  "Content-Type": "text/html; charset=utf-8",
  "Cache-Control": "private, no-store",
  "X-Robots-Tag": "noindex, nofollow",
};

// BLOG_CODES="tools=code-one;pro-submodule=code-two"  BLOG_COOKIE_SECRET="long random string"
// Missing config means a private post stays locked (fails closed).
function codeFor(slug: string): string | null {
  const entry = (process.env.BLOG_CODES ?? "")
    .split(";")
    .map((p) => p.trim().split("="))
    .find(([s]) => s === slug);
  return entry && entry[1] ? entry[1] : null;
}

function token(slug: string): string | null {
  const secret = process.env.BLOG_COOKIE_SECRET;
  return secret ? createHmac("sha256", secret).update(`blog:${slug}`).digest("hex") : null;
}

function safeEqual(a: string, b: string) {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

function hasAccess(req: NextRequest, slug: string) {
  const expected = token(slug);
  const got = req.cookies.get(`blog_${slug}`)?.value;
  return !!expected && !!got && safeEqual(expected, got);
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function gate(title: string, email: string, error: boolean, status = 401) {
  const subject = encodeURIComponent(`Access request: ${title}`);
  const html = `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow"><title>Private post</title>
<style>
  body{margin:0;background:#fcebd6;color:#1e1e1e;font-family:Georgia,serif;font-size:18px;line-height:1.6}
  main{max-width:520px;margin:0 auto;padding:72px 16px}
  a.back{font-family:system-ui,sans-serif;font-size:15px;color:#78716c;text-decoration:none}
  h1{font-size:2rem;line-height:1.15;margin:28px 0 12px}
  p{margin:0 0 16px}.muted{color:#78716c}
  form{display:flex;gap:8px;margin:20px 0}
  input{flex:1;font:inherit;padding:10px 12px;border:2px solid #1e1e1e;border-radius:8px;background:#fff7ed}
  button{font:inherit;padding:10px 18px;border:2px solid #1e1e1e;border-radius:8px;background:#1e1e1e;color:#fcebd6;cursor:pointer}
  .err{color:#c2412d;font-family:system-ui,sans-serif;font-size:15px}
</style>
<main>
  <a class="back" href="/blog">← All posts</a>
  <h1>This post is private</h1>
  <p class="muted">${esc(title)}</p>
  <p>Enter your access code to read it.</p>
  <form method="post"><input name="code" type="password" placeholder="Access code" autocomplete="off" required autofocus><button>Unlock</button></form>
  ${error ? '<p class="err">That code is not right.</p>' : ""}
  <p>No code yet? <a href="https://mail.google.com/mail/?view=cm&to=${esc(email)}&su=${subject}" target="_blank" rel="noopener">Request access</a> or email <b>${esc(email)}</b>.</p>
</main>`;
  return new NextResponse(html, { status, headers: HEADERS });
}

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  const post = getOffgridPost(params.slug);
  if (!post) return new NextResponse("Not found", { status: 404 });
  if (post.private && !hasAccess(req, post.slug)) {
    return gate(post.title, DATA.contact.email, false);
  }
  const file = path.join(process.cwd(), "private-posts", `${post.slug}.html`);
  if (!fs.existsSync(file)) return new NextResponse("Not found", { status: 404 });
  const html = fs.readFileSync(file, "utf-8");
  return new NextResponse(html, {
    headers: post.private
      ? HEADERS
      : { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "public, max-age=0, must-revalidate" },
  });
}

// Best-effort limit: 8 wrong tries per minute per IP (per server instance).
const attempts = new Map<string, number[]>();

export async function POST(req: NextRequest, { params }: { params: { slug: string } }) {
  const post = getOffgridPost(params.slug);
  if (!post || !post.private) return new NextResponse("Not found", { status: 404 });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "local";
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter((t) => now - t < 60_000);
  if (recent.length >= 8) return gate(post.title, DATA.contact.email, true, 429);

  const form = await req.formData();
  const given = String(form.get("code") ?? "");
  const expectedCode = codeFor(post.slug);
  const tok = token(post.slug);

  if (!expectedCode || !tok || !safeEqual(given, expectedCode)) {
    attempts.set(ip, [...recent, now]);
    return gate(post.title, DATA.contact.email, true);
  }

  const res = NextResponse.redirect(new URL(`/blog/${post.slug}`, req.url), 303);
  res.cookies.set(`blog_${post.slug}`, tok, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: `/blog/${post.slug}`,
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}
