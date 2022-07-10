import { createServer } from "http";
import { NotFoundError } from "./Errors";

export const server = (module: any) => {
  console.log({ module });
  return createServer((req, res) => {
    // server
    console.log({ url: req.url, method: req.method });
    const looking = module.find((route) => route.method === req.method && route.route === req.url);

    if (looking) {
      console.log({ looking });
      res.end(looking.handler());
    }

    const error = new NotFoundError(`Route ${req.url} Not found`);

    res.statusCode = error.code;
    res.end(JSON.stringify({ message: error.message, code: error.code }));
  });
};
