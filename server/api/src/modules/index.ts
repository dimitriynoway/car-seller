import { Module } from "../../lib/core";
import { CarController } from "./car/car.controller";

export const rootModule = Module({ controllers: [CarController] });
