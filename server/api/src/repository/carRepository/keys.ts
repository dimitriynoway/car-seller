import { ClassProvider } from '@nestjs/common';
import { CarRepository } from './car.repository';

export const CAR_REPOSITORY = 'repository.analyzer';

export const carRepositoryFactory: ClassProvider = {
  provide: CAR_REPOSITORY,
  useClass: CarRepository,
};
