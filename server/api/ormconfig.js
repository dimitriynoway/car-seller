const config = require('config');

module.exports = {
  type: 'postgres',
  host: process.env.ROCKETDEX_API_DB_HOST ?? config.postgres.connection.host,
  port: process.env.ROCKETDEX_API_DB_PORT ?? config.postgres.connection.port,
  database:
    process.env.ROCKETDEX_API_DB_NAME ?? config.postgres.connection.database,
  username:
    process.env.ROCKETDEX_API_DB_USER ?? config.postgres.connection.user,
  password:
    process.env.ROCKETDEX_API_DB_PASS ?? config.postgres.connection.password,
  entities:
    process.env.NODE_ENV === 'test'
      ? ['./src/models/*.model.*']
      : ['./dist/models/*.model.*', `${process.cwd()}*dist*/models/*.model.js`],
  migrationsRun: false,
};
