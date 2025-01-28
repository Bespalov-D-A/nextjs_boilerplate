import createBundleAnalyzer from '@next/bundle-analyzer';
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,

    stylelint: {
      ignoreDuringBuilds: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.gcs.ehi.com',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://0.0.0.0:3001/api/:path*`,
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@widgets': path.resolve('.', 'src/widgets/'),
      '@shared': path.resolve('.', 'src/shared/'),
      '@features': path.resolve('.', 'src/features/'),
      '@entities': path.resolve('.', 'src/entities/'),
      '@root': path.resolve('.', 'src/root/'),
      '@breakpoints': path.resolve(
        '.',
        'src/root/lib/theme/styles/mixins/screen.scss',
      ),
      '@vars': path.resolve('.', 'src/root/lib/theme/styles/vars.scss'),
      '@hover': path.resolve(
        '.',
        'src/root/lib/theme/styles/mixins/hover.scss',
      ),
    };

    return config;
  },
};

const withBundleAnalyzer = createBundleAnalyzer({
  // eslint-disable-next-line n/prefer-global/process
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);
