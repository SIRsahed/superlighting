/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // Add this section to configure path aliases
    experimental: {
      // Only needed for older Next.js versions
      // For Next.js 13.3+ this is not needed as it reads from jsconfig.json automatically
      appDir: true,
    },
    // You can also explicitly define webpack config if needed
    webpack: (config) => {
      // This helps ensure path aliases work correctly
      config.resolve.fallback = { fs: false, path: false };
      return config;
    },
  };
  
  export default nextConfig;