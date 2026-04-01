import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/yes-i-know",
  images: { unoptimized: true },
};

export default nextConfig;
