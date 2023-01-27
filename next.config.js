/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.jsx',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: `{/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}}/**}`,
      },
    ],

  },
  
}

module.exports = nextConfig
