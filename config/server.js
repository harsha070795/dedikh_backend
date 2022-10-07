require('dotenv').config
module.exports = ({ env }) => ({
  host: process.env.APP_HOST || '0.0.0.0',
  port: env.int('PORT', 1337),
  url: process.env.PUBLIC_URL || 'http://dedikhbackenddev-env-1.eba-qujghbp3.ap-south-1.elasticbeanstalk.com',
  app: {
    keys: env.array('APP_KEYS',['myKey1','myKey2','myKey3','myKey4']),
  },
});
