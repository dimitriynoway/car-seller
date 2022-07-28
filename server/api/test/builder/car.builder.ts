import { getManager } from 'typeorm';
import { Car } from '../../src/models/car.model';
import { Builder } from './abstract';

export class CarBuilder extends Builder<Car> {
  constructor(id?: number) {
    super();
    this.setEntity().reset();
    id ?? this.id(id);
  }

  setEntity() {
    this.instance = getManager().create(Car);
    return this;
  }

  reset() {
    this.instance.id = 1;
    this.instance.firm = 'BMW';
    this.instance.mark = 'X3';
    this.instance.year = 2014;
    this.instance.power = 250;
    this.instance.transmission = 'auto';
    this.instance.technicalStatus = 'used';
    this.instance.price = 25000;

    return this;
  }

  static timeToJson(car: Car) {
    return {
      ...car,
      createdAt: car.createdAt.toJSON(),
      updatedAt: car.updatedAt.toJSON(),
    };
  }
  // override build() {
  //   return super.build();
  // }
}
