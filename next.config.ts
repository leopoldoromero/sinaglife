import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  // images: {
  //   formats: ["image/avif", "image/webp"],
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: '',
  //       port: '',
  //       pathname: 'wp-content/uploads/**',
  //     },
  //   ], 
  // },
};

export default nextConfig;
