// next.config.js

const withTM = require('next-transpile-modules')([
  '@react-three/fiber',
  '@react-three/drei',
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {},
  },
};

module.exports = withTM(nextConfig);
