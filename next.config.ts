/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true, // ✅ ensures folders like /menu/ become /menu/index.html
  // Optional: safely ignore API routes during export
  experimental: {
    outputFileTracingIncludes: {
      '/': ['./src/**/*'],
    },
  },
};

export default nextConfig;
