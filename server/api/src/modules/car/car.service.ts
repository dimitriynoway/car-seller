/* eslint-disable class-methods-use-this */
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Between,
  FindManyOptions,
  LessThanOrEqual,
  MoreThanOrEqual,
  Repository,
} from 'typeorm';
import { ICarService } from './car.interface';
import { Car } from '../../models/car.model';
import { CreateCarDTO } from './dto/createCar.dto';
import { Buyer } from '../../models/buyer.model';

@Injectable()
export class CarService implements ICarService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
    @InjectRepository(Buyer)
    private buyerRepository: Repository<Buyer>,
  ) {}

  async getBuyersForCar(id: number): Promise<Buyer[]> {
    try {
      const carReq = await this.carRepository.findOne(id);

      if (!carReq) {
        throw new BadRequestException('Does not exist');
      }

      return this.filterCars(carReq);
    } catch (e) {
      throw new BadRequestException(`getCarsForBuyer. error: ${e}`);
    }
  }

  getCars(): Promise<Car[]> {
    return this.carRepository.find();
  }

  async getCar(id: number): Promise<Car | null> {
    const car = await this.carRepository.findOne(id);

    return car ?? null;
  }

  async updateCar(id: number, payload: Partial<Car>): Promise<boolean> {
    try {
      const updatedCar = await this.carRepository.update(id, payload);

      return updatedCar.affected === 1;
    } catch (e) {
      throw new BadRequestException(`Incorrect data passed: ${e}`);
    }
  }

  async removeCar(id: number): Promise<boolean> {
    const removedCar = await this.carRepository.delete(id);

    return removedCar.affected === 1;
  }

  search(query: Partial<Car>): Promise<Car[]> {
    const filterSearchFields = this.filterSearchFields(query);

    return this.carRepository.find(filterSearchFields);
  }

  createCar(car: CreateCarDTO): Promise<Car> {
    return this.carRepository.save(car);
  }

  private filterSearchFields(query: Partial<Car>): FindManyOptions<Car> {
    const filteredQuery = {};
    const carProps = [
      'id',
      'firm',
      'mark',
      'year',
      'power',
      'transmission',
      'technicalStatus',
      'price',
    ];

    Object.keys(query).forEach((prop) => {
      if (carProps.includes(prop)) {
        filteredQuery[prop] = query[prop];
      }
    });

    return { where: filteredQuery };
  }

  private filterCars(payload: Car) {
    const { price } = payload;
    const filteredQuery = {};
    const carProps = [
      'firm',
      'mark',
      'year',
      'power',
      'transmission',
      'technicalStatus',
    ];

    Object.keys(payload).forEach((prop) => {
      if (carProps.includes(prop)) {
        filteredQuery[prop] = payload[prop];
      }
    });

    const query = {
      where: {
        ...filteredQuery,
        lowestPrice: LessThanOrEqual(price),
        highestPrice: MoreThanOrEqual(price),
      },
    };

    return this.buyerRepository.find(query);
  }

  async filterForBuyer(payload: Partial<Buyer>): Promise<Car[]> {
    const { lowestPrice, highestPrice } = payload;
    const filteredQuery = {};
    const carProps = [
      'firm',
      'mark',
      'year',
      'power',
      'transmission',
      'technicalStatus',
    ];

    Object.keys(payload).forEach((prop) => {
      if (carProps.includes(prop)) {
        filteredQuery[prop] = payload[prop];
      }
    });

    const price =
      lowestPrice && highestPrice
        ? { price: Between(lowestPrice, highestPrice) }
        : lowestPrice
        ? { price: MoreThanOrEqual(lowestPrice) }
        : highestPrice
        ? { price: LessThanOrEqual(lowestPrice) }
        : {};

    const query = { where: { ...filteredQuery, ...price } };

    const allCars = await this.carRepository.find();
    console.log({ query, allCars });

    const res = await this.carRepository.find(query);
    console.log({ res });
    return res;
  }
}
