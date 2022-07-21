import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Car } from '../../models/car.model';

@Injectable()
@EntityRepository(Car)
export class CarRepository extends Repository<Car> {}
