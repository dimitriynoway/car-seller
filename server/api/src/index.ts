import "reflect-metadata";
import { Controller, Get, server, Module } from "../lib/core";

@Controller()
class X {
  // eslint-disable-next-line class-methods-use-this
  @Get("start")
  method() {
    return "hello";
  }
}

const x = new X();
x.method();

const m = Module({ controller: [X] });

console.log({ m });

server(m).listen(3000);
