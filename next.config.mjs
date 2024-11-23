/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  basePath: isProd ? "/website-2024" : "",
  output: "export",
  distDir: "dist",
};

export default nextConfig;
