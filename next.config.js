/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  publicRuntimeConfig:{
    APP_NAME: 'IEM-UMPSS',
    API_DEVELOPMENT: 'http://localhost:3000/api',
    API_PRODUCTION: 'https://iemumpss.vercel.app/api',
    PRODUCTION: true,
    DOMAIN_DEVELOPMENT: 'http://localhost:3000',
    DOMAIN_PRODUCTION: 'https://iemumpss.vercel.app/',
  },
  future: {
    webpack5: true, // by default, if you customize webpack config, they switch back to version 4. 
      // Looks like backward compatibility approach.
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
        // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
    };

    return config;
  }
};
