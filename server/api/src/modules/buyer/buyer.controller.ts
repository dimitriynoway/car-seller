import { Controller, Delete, Get, Inject, Post, Put } from '@nestjs/common';
import { IBuyerService } from './buyer.interface';
import { BUYER_SERVICE } from './buyer.key';

@Controller('/car')
export class BuyerController {
  constructor(
    @Inject(BUYER_SERVICE)
    private buyerService: IBuyerService,
  ) {}

  @Get('/')
  getBuyers() {}

  @Get('search')
  search() {}

  @Post(':id')
  createBuyer() {}

  @Put(':id')
  updateBuyer() {}

  @Delete(':id')
  removeBuyer() {}

  @Get(':id')
  getBuyer() {}
}
