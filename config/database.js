module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    return {
      connection: {
        client: "postgres",
        connection: {
          host: env("DATABASE_HOST", "awseb-e-aumkkwui9b-stack-awsebrdsdatabase-ppel99xnbrqf.ct7bv7v3kxwt.ap-south-1.rds.amazonaws.com"),
          port: env.int("DATABASE_PORT", 5432),
          database: env("DATABASE_NAME", "ebdb"),
          user: env("DATABASE_USERNAME", "dipansharma"),
          password: env("DATABASE_PASSWORD", "dt-20082101"),
          ssl: env.bool("DATABASE_SSL", false),
        },
      },
    };
  } else {
    return {};
  }
};
