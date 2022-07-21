export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export interface IConfigApp {
  app: { port: number };
  postgres: {
    client: string;
    connection: {
      user: string;
      database: string;
      host: string;
      port: number;
      password: string;
    };
    migrations: {
      directory: string;
      loadExtensions: string[];
    };
    seeds: {
      directory: string;
      loadExtensions: string[];
    };
    maxOpenConnections: number;
    loadExtensions: string;
  };
}
