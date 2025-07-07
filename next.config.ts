import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: "./", // Don't use next/font otherwise it wont let u build:next
  images: {
    unoptimized: true,
  },
  devIndicators: false
};

export default nextConfig;
