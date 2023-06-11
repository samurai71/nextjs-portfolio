const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withPWA = require('next-pwa')

module.exports = withBundleAnalyzer(
  withPWA({
    webpack: true,
    webpack: (config) => {
      // Fixes npm packages that depend on `fs` module
      config.resolve.fallback = { fs: false }
      return config
    },
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'imgur.com',
        },
      ],
    },

    // Pwa Setting
    pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === 'development',
      publicExcludes: ['!resume.pdf'],
    },
  })
)
