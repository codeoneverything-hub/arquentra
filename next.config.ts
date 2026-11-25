import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async rewrites() {
    return [
      {
        source: "/prep/privacy",
        destination: "/prep/privacy/index.html",
      },
      {
        source: "/prep/account-deletion",
        destination: "/prep/account-deletion/index.html",
      },
    ];
  },
};

export default nextConfig;