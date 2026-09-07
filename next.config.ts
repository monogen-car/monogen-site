import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // This is a marketing site with no server-rendered data. Exporting every
  // route makes the deploy portable to Netlify's CDN and avoids deep-link 404s.
  output: 'export',
};

export default nextConfig;
