import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions , Repository } from 'typeorm';
import { ICarService } from './car.interface';
import { Car } from '../../models/car.model';
import { CreateCarDTO } from './dto/createCar.dto';

@Injectable()
export class CarService implements ICarService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
  ) {}

  getCars(): Promise<Car[]> {
    return this.carRepository.find();
  }

  getCar(id: number): Promise<Car> {
    return this.carRepository.findOne(id);
  }

  async updateCar(id: string, payload: Partial<Car>): Promise<boolean> {
    const updatedCar = await this.carRepository.update(id, payload);

    return updatedCar.affected === 1;
  }

  async removeCar(id: string): Promise<boolean> {
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
}
