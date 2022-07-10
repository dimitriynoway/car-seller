import "reflect-metadata";
import { CreateServer } from "../lib/core";
import { rootModule } from "./modules";

const main = () => {
  const server = CreateServer(rootModule);

  server.listen(3000);
};

main();
