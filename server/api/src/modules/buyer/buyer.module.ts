import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Buyer } from '../../models/buyer.model';
import { buyerRepositoryFactory } from '../../repository/buyerRepository/keys';
import { CarModule } from '../car/car.module';
import { BuyerController } from './buyer.controller';
import { buyerServiceFactory } from './buyer.key';

@Module({
  imports: [TypeOrmModule.forFeature([Buyer]), CarModule],
  controllers: [BuyerController],
  providers: [buyerServiceFactory, buyerRepositoryFactory],
  exports: [buyerServiceFactory],
})
export class BuyerModule {}
