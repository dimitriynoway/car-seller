import { ClassProvider } from '@nestjs/common';
import { BuyerService } from './buyer.service';

export const BUYER_SERVICE = 'buyer.service';

export const buyerServiceFactory: ClassProvider = {
  useClass: BuyerService,
  provide: BUYER_SERVICE,
};
