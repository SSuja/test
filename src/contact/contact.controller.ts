import {
  Controller,
  Get,
  Body,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactEntity } from './contact.entity';

@Controller('contact')
export class ContactController {
  //dependency injection- contact service
  constructor(private readonly contactService: ContactService) {}

  //API to find all contacts
  @Get()
  async findAll(): Promise<ContactEntity[]> {
    return this.contactService.findAll();
  }

  //API to find contact by id
  @Get(':id')
  async findById(id): Promise<ContactEntity> {
    return this.contactService.findById(id);
  }

  //API to create new contacts
  @Post()
  async create(@Body() contactEntity: ContactEntity): Promise<ContactEntity> {
    return this.contactService.create(contactEntity);
  }

  //API to modify contact details
  @Put(':id')
  async update(
    @Param('id') id, //passing parameter- id
    @Body() contactEntity: ContactEntity, //passing contact details in body to modify
  ): Promise<any> {
    contactEntity.id = Number(id);
    console.log('Update #' + contactEntity.id);
    return this.contactService.update(contactEntity);
  }

  //API to delete contact details
  @Delete(':id')
  async delete(@Param('id') id): Promise<any> {
    return this.contactService.delete(id);
  }
}
