/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
};

export default nextConfig;
