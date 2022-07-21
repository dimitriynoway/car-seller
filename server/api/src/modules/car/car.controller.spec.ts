import request from 'supertest';
import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getManager } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from './car.module';
import { CarController } from './car.controller';
import { CarBuilder } from '../../../test/builder/car.builder';
import {
  cleanupDbStubRecords,
  getTestIndexIncr,
  pushToDbStubsBin,
} from '../../utils/test-helper';
import { Car } from '../../models/car.model';

describe('ContentController', () => {
  let app: INestApplication;
  let controller: CarController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        CarModule,
        TypeOrmModule.forRoot({ keepConnectionAlive: true }),
        TypeOrmModule.forFeature([Car]),
      ],
    }).compile();

    controller = module.get(CarController);
    app = module.createNestApplication();

    await app.init();
  });

  afterEach(async () => {
    await cleanupDbStubRecords();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('GET car/:id', async () => {
    const manager = getManager();

    const savedCar = await manager.save(
      Object.assign(new Car(), new CarBuilder(getTestIndexIncr()).build()),
    );

    pushToDbStubsBin<Car>(Car, { id: savedCar.id });

    const response = await request(app.getHttpServer()).get(
      `/car/${savedCar.id}`,
    );

    expect(response.body).toMatchObject(CarBuilder.timeToJson(savedCar));
  });

  afterAll(async () => {
    await app.close();
  });
});
