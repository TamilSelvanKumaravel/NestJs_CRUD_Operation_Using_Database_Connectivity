import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  Id: string;

  @Column()
  Name: string;

  @Column()
  Age: string;

  @Column()
  email: string;

  @Column({ default: true })
  isActive: boolean;
}