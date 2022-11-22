module.exports = ({ env }) => [
  "strapi::errors",  
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "script-src": ["'self'", "'unsafe-inline'", "cdn.jsdelivr.net"],
          "img-src": [
            "'self'",
            "data:",
            "cdn.jsdelivr.net",
            "strapi.io",
            `${env("AWS_S3_BUCKET_NAME")}.s3.${env("AWS_S3_REGION")}.amazonaws.com`,
          ],
        },
      },
    },
  },
];
