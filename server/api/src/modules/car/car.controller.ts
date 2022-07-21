import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Car } from '../../models/car.model';
import { ICarService } from './car.interface';
import { CAR_SERVICE } from './car.key';
import { CreateCarDTO } from './dto/createCar.dto';

@Controller('/car')
export class CarController {
  constructor(
    @Inject(CAR_SERVICE)
    private carService: ICarService,
  ) {}

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
  updateCar() {
    // return this.carService.updateCar();
  }

  @Delete(':id')
  removeCar() {
    // return this.carService.removeCar();
  }

  @Get(':id')
  getCar(@Query('id') id: number) {
    return this.carService.getCar(id);
  }
}
