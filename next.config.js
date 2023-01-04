/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  publicRuntimeConfig:{
    APP_NAME: 'IEM-UMPSS',
    API_DEVELOPMENT: 'http://localhost:3000/api',
    API_PRODUCTION: 'https://iemumpss.vercel.app/',
    PRODUCTION: true,
    DOMAIN_DEVELOPMENT: 'http://localhost:3000',
    DOMAIN_PRODUCTION: 'https://iemumpss.vercel.app/',
  }
};
