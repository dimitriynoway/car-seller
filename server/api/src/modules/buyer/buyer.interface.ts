import { Buyer } from '../../models/buyer.model';
import { Car } from '../../models/car.model';
import { CreateBuyerDto } from './dto/createBuyer.dto';

export interface IBuyerService {
  getBuyersOrders(): Promise<Buyer[]>;
  search(): Promise<Buyer[]>;
  createBuyerOrder(payload: CreateBuyerDto): Promise<Buyer>;
  updateBuyerOrder(id: number, payload: Partial<Buyer>): Promise<Buyer>;
  removeBuyerOrder(id: number): Promise<boolean>;
  getBuyerOrder(id: number): Promise<Buyer>;
  getCarsForBuyer(id: number): Promise<Car[]>;
}
