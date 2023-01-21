const { i18n } = require('./i18n.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  i18n
  /* images: {
    loader: 'custom',
    loaderFile: 'utils/ImageLoader.ts'
    // disableStaticImages: true,
  } */

}

module.exports = nextConfig
