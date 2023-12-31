/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['ja', 'en', 'vi'],
    defaultLocale: 'ja',
  }
}

module.exports = nextConfig
