// Hand-built HTML posts. Source files live in private-posts/ (outside public/) and are
// served only through src/app/blog/[slug]/route.ts. Slugs in `private: true` need an access code.
const DATES: Record<string, string> = {
  "litert": "2026-09-29",
  "tools": "2026-09-17",
  "crashes": "2026-09-08",
  "downloads": "2026-08-27",
  "pro-submodule": "2026-08-18",
};

export const OFFGRID_POSTS = [
  { slug: "litert", title: "Two Engines, One App : Why We Bet on the Phone's GPU", private: false },
  { slug: "tools", title: "Sixty Tools, One Small Brain : Tool Calling on a Phone", private: true },
  { slug: "crashes", title: "Debugging Blind : Reading Crashes and ANRs Without a Crash SDK", private: false },
  { slug: "downloads", title: "The 1,350-Character URL : Why We Stopped Trusting Android's DownloadManager", private: false },
  { slug: "pro-submodule", title: "Hiding Pro in Plain Sight", private: false },
].map((p) => ({ ...p, publishedAt: DATES[p.slug] }));

export function getOffgridPost(slug: string) {
  return OFFGRID_POSTS.find((p) => p.slug === slug);
}
