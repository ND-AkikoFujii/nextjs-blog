/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'next-js-test.assets.newt.so',
        port: '',
        pathname: '**/**'
      }
    ]
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: true
    }
  }
};

export default nextConfig;
