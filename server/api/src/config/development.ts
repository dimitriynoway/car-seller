import { DeepPartial, IConfigApp } from './constraint';

const config: DeepPartial<IConfigApp> = {
  app: {
    port: 5000,
  },
  postgres: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5450,
      database: 'car-seller',
      user: 'car-seller',
      password: 'car-seller',
    },
    migrations: {
      directory: '../dist/database/migrations',
      loadExtensions: ['.js'],
    },
    seeds: {
      directory: '../dist/database/seeds/dev',
    },
    maxOpenConnections: 20,
  },
};

module.exports = config;
