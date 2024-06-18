// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.glsl': {
          loaders: ['raw-loader'],
          as: '*.ts',
        },
      },
    },
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   formats: ['image/avif', 'image/webp']
  // },
}

module.exports = nextConfig

