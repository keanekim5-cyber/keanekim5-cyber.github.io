import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: GitHub Pages only serves plain files, no Node server.
  // `next build` writes the exported site to ./out.
  output: "export",

  // GitHub Pages has no image-optimization endpoint, so ship the
  // originals as-is instead of routing them through next/image's API.
  images: {
    unoptimized: true,
  },

  // Emit `/about/index.html` instead of `/about.html` so every route
  // resolves cleanly on GitHub Pages' static file server.
  trailingSlash: true,
};

export default nextConfig;
