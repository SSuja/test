import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactEntity } from './contact.entity';

@Module({
  /*
  TypeORM will recognize the Contact entity and will synchronize 
  the database accordingly by creating a contact_entity table
  */
  imports: [TypeOrmModule.forFeature([ContactEntity])],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
