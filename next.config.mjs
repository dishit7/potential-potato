/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Make sure the post HTML ships with the server bundle on hosts like Vercel.
    outputFileTracingIncludes: {
      "/blog/[slug]": ["./private-posts/**/*"],
    },
  },
};

export default nextConfig;
