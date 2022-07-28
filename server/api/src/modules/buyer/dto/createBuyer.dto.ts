import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateBuyerDto {
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
  lowestPrice: number;

  @IsNumber()
  @IsNotEmpty()
  highestPrice: number;
}
// "firm": "Audi"
// "mark": "X3"
// "year": "2014"
// "power": "number"
// "transmission": "string"
// "technicalStatus": "string"
// "lowestPrice": "number"
// "highestPrice": "number"
