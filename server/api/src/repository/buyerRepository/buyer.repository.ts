import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Buyer } from '../../models/buyer.model';

@Injectable()
@EntityRepository(Buyer)
export class BuyerRepository extends Repository<Buyer> {}
