require('dotenv').config
module.exports = ({ env }) => ({
  host: process.env.APP_HOST || '0.0.0.0',
  port: env.int('PORT', 1337),
  app: {
    keys: process.env.array.APP_KEYS,
  },
});
