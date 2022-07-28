import { config } from './utils/config';

const knexConfig = JSON.parse(JSON.stringify(config.getTyped('postgres')));

knexConfig.loadExtensions = ['.js'];
knexConfig.connection.host =
  process.env.THETRADE_API_DB_HOST ?? knexConfig.connection.host;
knexConfig.connection.port =
  process.env.THETRADE_API_DB_PORT ?? knexConfig.connection.port;
knexConfig.connection.database =
  process.env.THETRADE_API_DB_NAME ?? knexConfig.connection.database;
knexConfig.connection.user =
  process.env.THETRADE_API_DB_USER ?? knexConfig.connection.user;
knexConfig.connection.password =
  process.env.THETRADE_API_DB_PASS ?? knexConfig.connection.password;

module.exports = knexConfig;
