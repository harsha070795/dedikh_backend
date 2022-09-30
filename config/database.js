module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("AWS_RDS_DATABASE_HOST"),
      port: env.int("AWS_RDS_DATABASE_PORT"),
      database: env("AWS_RDS_DATABASE_NAME"),
      user: env("AWS_RDS_DATABASE_USERNAME"),
      password: env("AWS_RDS_DATABASE_PASSWORD"),
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
});
