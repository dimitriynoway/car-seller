import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarController } from './car.controller';
import { carServiceFactory } from './car.key';
import { Car } from '../../models/car.model';
import { carRepositoryFactory } from '../../repository/carRepository/keys';
import { buyerRepositoryFactory } from '../../repository/buyerRepository/keys';
import { Buyer } from '../../models/buyer.model';

@Module({
  imports: [TypeOrmModule.forFeature([Car, Buyer])],
  controllers: [CarController],
  providers: [carServiceFactory, carRepositoryFactory, buyerRepositoryFactory],
  exports: [carServiceFactory],
})
export class CarModule {}
