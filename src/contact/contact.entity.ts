import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

//create table contact_entity
@Entity()
export class ContactEntity {
  //generate id as primary key
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  telephone: string;
}
