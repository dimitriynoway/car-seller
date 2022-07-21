import { ClassProvider } from '@nestjs/common';
import { CarService } from './car.service';

export const CAR_SERVICE = 'car.service';

export const carServiceFactory: ClassProvider = {
  useClass: CarService,
  provide: CAR_SERVICE,
};
