import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '41029007.servicio-online.net',
        port: '',
        pathname: 'wp-content/uploads/**',
      },
    ], 
  },
};

export default nextConfig;
