import { createServer } from "http";
import { NotFoundError } from "./Errors";

export const CreateServer = (module: any) => createServer((req, res) => {
    const looking = module.find((route) => route.method === req.method && route.route === req.url);

    if (looking) {
      return res.end(looking.handler());
    }

    const error = new NotFoundError(`Route ${req.url} Not found`);

    res.statusCode = error.code;
    return res.end(JSON.stringify({ message: error.message, code: error.code }));
  });
