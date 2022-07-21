import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CARS } from '../database/info';

@Entity(CARS)
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firm: string;

  @Column()
  mark: string;

  @Column()
  year: number;

  @Column()
  power: number;

  @Column()
  transmission: string;

  @Column()
  technicalStatus: string;

  @Column()
  price: number;

  @Column()
  createdAt: Date = new Date();

  @Column()
  updatedAt: Date = new Date();
  // seller ->
}
