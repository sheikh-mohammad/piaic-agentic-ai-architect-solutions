import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strip the `X-Powered-By: Next.js` header (a few bytes + info leak).
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
