/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages use a custom domain or a repo name as the base path
  // basePath: '/your-repo-name', // Replace with your actual repo name
}

module.exports = nextConfig
