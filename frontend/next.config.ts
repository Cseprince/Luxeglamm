const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    i18n: {
        locales: ['en', 'fr'],
        defaultLocale: 'en',
    },
};

module.exports = withNextIntl(nextConfig);


