import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateCarDTO {
  @IsString()
  @IsNotEmpty()
  firm: string;

  @IsString()
  @IsNotEmpty()
  mark: string;

  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsNumber()
  @IsNotEmpty()
  power: number;

  @IsString()
  @IsNotEmpty()
  transmission: string;

  @IsString()
  @IsNotEmpty()
  technicalStatus: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}

export class UpdateCarDTO {
  @IsOptional()
  @IsString()
  firm: string;

  @IsOptional()
  @IsString()
  mark: string;

  @IsOptional()
  @IsNumber()
  year: number;

  @IsOptional()
  @IsNumber()
  power: number;

  @IsOptional()
  @IsString()
  transmission: string;

  @IsOptional()
  @IsString()
  technicalStatus: string;

  @IsOptional()
  @IsNumber()
  price: number;
}

// "firm": "BMW",
// "mark": "X3",
// "year": 2014,
// "power": 245,
// "transmission": "full",
// "technicalStatus": "used",
// "price": 26000

// "firm": "BMW",
// "mark": "X3",
// "year": 2014,
// "power": 245,
// "transmission": "full",
// "technicalStatus": "used",
// "lowestPrice": 20000,
// "highestPrice": 30000
