import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remote patterns forbidden by AGENTS.md §Images
  images: {
    formats: ["image/webp"],
  },
};

export default nextConfig;

