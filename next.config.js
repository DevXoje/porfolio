/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    loader: 'custom',
    loaderFile: 'utils/ImageLoader.ts'
    // disableStaticImages: true,
  }

}

module.exports = nextConfig
