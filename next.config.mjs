/** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  // basePath: isProd ? "/website-2024" : "",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  output: "export",
  distDir: "dist",
  images: { unoptimized: true },
};

export default nextConfig;
