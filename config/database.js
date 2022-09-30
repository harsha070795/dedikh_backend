module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: process.env("AWS_RDS_DATABASE_HOST"),
      port: env.int("AWS_RDS_DATABASE_PORT"),
      database: process.env("AWS_RDS_DATABASE_NAME"),
      user: process.env("AWS_RDS_DATABASE_USERNAME"),
      password: process.env("AWS_RDS_DATABASE_PASSWORD"),
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
});
