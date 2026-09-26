import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.magnific.com',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
