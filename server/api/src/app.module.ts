import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuyerModule } from './modules/buyer/buyer.module';
import { CarModule } from './modules/car/car.module';
import { Car } from './models/car.model';

@Module({
  imports: [TypeOrmModule.forRoot(), CarModule, BuyerModule],
})
export class AppModule {}
