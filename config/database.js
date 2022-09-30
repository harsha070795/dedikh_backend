require('dotenv').config
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: process.env.AWS_RDS_DATABASE_HOST,
      database: process.env.AWS_RDS_DATABASE_NAME,
      user: process.env.AWS_RDS_DATABASE_USERNAME,
      password: process.env.AWS_RDS_DATABASE_PASSWORD,
      port: 5432,
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
});
