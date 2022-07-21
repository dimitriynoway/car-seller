import { Module } from '@nestjs/common';
import { BuyerController } from './buyer.controller';
import { buyerServiceFactory } from './buyer.key';

@Module({
  controllers: [BuyerController],
  providers: [buyerServiceFactory],
  exports: [buyerServiceFactory],
})
export class BuyerModule {}
