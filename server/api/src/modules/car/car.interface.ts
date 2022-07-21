import { Car } from '../../models/car.model';
import { CreateCarDTO } from './dto/createCar.dto';

export interface ICarService {
  getCars(): Promise<Car[]>;
  getCar(id: number): Promise<Car>;
  updateCar(id: string, payload: Partial<Car>): Promise<boolean>;
  removeCar(id: string): Promise<boolean>;
  search(car: Partial<Car>): Promise<Car[]>;
  createCar(createCarDTO: CreateCarDTO): Promise<Car>;
}
