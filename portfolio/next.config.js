// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // only include this if you're using App Router features
    appDir: true,
  },
};

module.exports = nextConfig;
