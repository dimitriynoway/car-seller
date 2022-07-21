import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BUYER } from '../database/info';

@Entity(BUYER)
export class Buyer {
  @PrimaryGeneratedColumn()
  id: number;

  // buyer info ->

  @Column()
  firm: string;

  @Column()
  mark: string;

  @Column()
  year: number;

  @Column()
  power: string;

  @Column()
  transmission: string;

  @Column()
  technicalStatus: string;

  @Column()
  lowestPrice: number;

  @Column()
  highestPrice: number;

  @Column()
  createdAt: Date = new Date();

  @Column()
  updatedAt: Date = new Date();
}
