/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable persistent webpack cache in dev to avoid broken cache files on Windows.
      config.cache = false;
    }

    return config;
  },
};

export default nextConfig;
