/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./app/localization/request.ts');

const nextConfig = {};

export default withNextIntl(nextConfig);
