require("dotenv").config;
const crypto = require("crypto")
module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: process.env.JWT_SECRET || crypto.randomBytes(16).toString('base64'),
    },
  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_S3_ACCESS_SECRET,
        region: process.env.AWS_S3_REGION,
        params: {
          Bucket: process.env.AWS_S3_BUCKET_NAME,
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
