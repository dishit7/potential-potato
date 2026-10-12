import BlurFade from "@/components/magicui/blur-fade";
import { OFFGRID_POSTS } from "@/data/offgrid-posts";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

const MEDIUM_POST = {
  title: "What 366 Commits Taught Me This Year",
  href: "https://medium.com/@hanmadishit74/what-366-commits-taught-me-this-year-9d9f380e6b5c",
};

export default async function BlogPage() {
  const posts = [
    ...OFFGRID_POSTS.map((p) => ({
      slug: p.slug,
      metadata: { title: p.title, publishedAt: p.publishedAt },
      private: p.private,
    })),
  ];

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <a
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">{post.metadata.title}</p>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.metadata.publishedAt}
                  {post.private ? " · 🔒 private, request access" : ""}
                </p>
              </div>
            </a>
          </BlurFade>
        ))}
      <BlurFade delay={BLUR_FADE_DELAY * 2 + posts.length * 0.05}>
        <a
          className="flex flex-col space-y-1 mb-4"
          href={MEDIUM_POST.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full flex flex-col">
            <p className="tracking-tight">{MEDIUM_POST.title}</p>
            <p className="h-6 text-xs text-muted-foreground">on Medium ↗</p>
          </div>
        </a>
      </BlurFade>
    </section>
  );
}
