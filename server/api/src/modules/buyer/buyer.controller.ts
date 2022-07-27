import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Buyer } from '../../models/buyer.model';
import { IBuyerService } from './buyer.interface';
import { BUYER_SERVICE } from './buyer.key';
import { CreateBuyerDto } from './dto/createBuyer.dto';

@Controller('/buyer')
export class BuyerController {
  constructor(
    @Inject(BUYER_SERVICE)
    private buyerService: IBuyerService,
  ) {}

  @Get('/:id/cars')
  getCarsForBuyer(@Param('id') id: number) {
    return this.buyerService.getCarsForBuyer(id);
  }

  @Get('/')
  getBuyers() {
    return this.buyerService.getBuyersOrders();
  }

  @Get('search')
  search() {
    return this.buyerService.search();
  }

  @Post('/')
  createBuyer(@Body() payload: CreateBuyerDto) {
    return this.buyerService.createBuyerOrder(payload);
  }

  @Put(':id')
  updateBuyer(@Param('id') id: number, @Body() payload: Partial<Buyer>) {
    return this.buyerService.updateBuyerOrder(id, payload);
  }

  @Delete(':id')
  removeBuyer(@Param('id') id: number) {
    return this.buyerService.removeBuyerOrder(id);
  }

  @Get(':id')
  getBuyer(@Param('id') id: number) {
    return this.buyerService.getBuyerOrder(id);
  }
}
