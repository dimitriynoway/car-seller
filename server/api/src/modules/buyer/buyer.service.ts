import { Injectable } from '@nestjs/common';
import { IBuyerService } from './buyer.interface';

@Injectable()
export class BuyerService implements IBuyerService {}
