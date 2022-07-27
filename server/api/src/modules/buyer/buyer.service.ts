import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Buyer } from '../../models/buyer.model';
import { Car } from '../../models/car.model';
import { CAR_SERVICE } from '../car/car.key';
import { CarService } from '../car/car.service';
import { IBuyerService } from './buyer.interface';

@Injectable()
export class BuyerService implements IBuyerService {
  constructor(
    @InjectRepository(Buyer)
    private buyerRepository: Repository<Buyer>,
    @Inject(CAR_SERVICE)
    private carService: CarService,
  ) {}

  async getCarsForBuyer(id: number): Promise<Car[]> {
    try {
      const buyerReq = await this.buyerRepository.findOne(id);

      if (!buyerReq) {
        throw new BadRequestException();
      }

      return this.carService.filterForBuyer(buyerReq);
    } catch (e) {
      throw new BadRequestException(`getCarsForBuyer. error: ${e}`);
    }
  }

  getBuyersOrders(): Promise<Buyer[]> {
    return this.buyerRepository.find();
  }

  search(): Promise<Buyer[]> {
    // TODO
    return this.buyerRepository.find();
  }

  async createBuyerOrder(payload: Partial<Buyer>): Promise<Buyer> {
    const buyer = await this.buyerRepository.save(
      this.buyerRepository.create(payload),
    );
    return buyer;
  }

  async updateBuyerOrder(id: number, payload: Partial<Buyer>): Promise<Buyer> {
    const buyer = await this.buyerRepository.findOne({ id });

    if (!buyer) {
      throw new BadRequestException('Buyer does not exist');
    }

    return this.buyerRepository.save({ ...buyer, ...payload });
  }

  async removeBuyerOrder(id: number): Promise<boolean> {
    const response = await this.buyerRepository.delete({ id });

    return response.affected === 1;
  }

  getBuyerOrder(id: number): Promise<Buyer> {
    return this.buyerRepository.findOne(id);
  }
}
