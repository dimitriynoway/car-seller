import { ClassProvider } from '@nestjs/common';
import { BuyerRepository } from './buyer.repository';

export const BUYER_REPOSITORY = 'repository.buyer';

export const buyerRepositoryFactory: ClassProvider = {
  provide: BUYER_REPOSITORY,
  useClass: BuyerRepository,
};
