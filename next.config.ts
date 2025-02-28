import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);
console.log('process.env.ENV_NAME: ', process.env.ENV_NAME);
console.log('process.env.LOCAL_ENV_NAME: ', process.env.LOCAL_ENV_NAME);
// import remarkGfm from 'remark-gfm';
const nextConfig: NextConfig = {
  /* config options here */
  // experimental: {
  //   typedRoutes: true,
  // },
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
      },
    ],
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx', 'md'],
};

const withMDX = createMDX({
  // 필요한 마크다운 플러그인을 추가할 수 있음~!
  options: {
    // remarkPlugins: [remarkGfm],
    // ts-expect-error remark-gfm 타입 충돌 문제 해결
    // remarkPlugins: [['remark-gfm']],
  },
});

export default withMDX(nextConfig);
