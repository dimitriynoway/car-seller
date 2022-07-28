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
import { Car } from '../../models/car.model';
import { ICarService } from './car.interface';
import { CAR_SERVICE } from './car.key';
import { CreateCarDTO, UpdateCarDTO } from './dto/createCar.dto';

@Controller('/car')
export class CarController {
  constructor(
    @Inject(CAR_SERVICE)
    private carService: ICarService,
  ) {}

  @Get('/:id/buyer')
  getCarsForBuyer(@Param('id') id: number) {
    return this.carService.getBuyersForCar(id);
  }

  @Get('/')
  getCars() {
    return this.carService.getCars();
  }

  @Get('search')
  search(@Query() query: Partial<Car>) {
    return this.carService.search(query);
  }

  @Post('')
  createCar(@Body() createCarDTO: CreateCarDTO) {
    return this.carService.createCar(createCarDTO);
  }

  @Put(':id')
  updateCar(@Param('id') id: number, @Body() updateCar: UpdateCarDTO) {
    return this.carService.updateCar(id, updateCar);
  }

  @Delete(':id')
  removeCar(@Param('id') id: number) {
    return this.carService.removeCar(id);
  }

  @Get(':id')
  getCar(@Param('id') id: number) {
    return this.carService.getCar(id);
  }
}
