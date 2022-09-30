module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    return {
      connection: {
        client: "postgres",
        connection: {
          host: env("RDS_DATABASE_HOST"),
          port: env.int("RDS_DATABASE_PORT"),
          database: env("RDS_DATABASE_NAME"),
          user: env("RDS_DATABASE_USERNAME"),
          password: env("RDS_DATABASE_PASSWORD"),
          ssl: env.bool("DATABASE_SSL", false),
        },
      },
    };
  } else {
    return {};
  }
};
