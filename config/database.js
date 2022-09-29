module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    return {
      connection: {
        client: "postgres",
        connection: {
          host: env("DATABASE_HOST", "127.0.0.1"),
          port: env.int("DATABASE_PORT", 5432),
          database: env("DATABASE_NAME", "dedikh_backend"),
          user: env("DATABASE_USERNAME", "postgres"),
          password: env("DATABASE_PASSWORD", "root"),
          ssl: env.bool("DATABASE_SSL", false),
        },
      },
    };
  } else {
    return {};
  }
};
