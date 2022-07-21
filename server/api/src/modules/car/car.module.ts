import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarController } from './car.controller';
import { carServiceFactory } from './car.key';
import { Car } from '../../models/car.model';
import { carRepositoryFactory } from '../../repository/carRepository/keys';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  controllers: [CarController],
  providers: [carServiceFactory, carRepositoryFactory],
  exports: [carServiceFactory],
})
export class CarModule {}
