import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactEntity } from './contact.entity';
import { ContactRepository } from './contact.repository';
import { UpdateResult, DeleteResult } from 'typeorm';
import { ContactDto } from './dto/contact.dto';

@Injectable({ scope: Scope.REQUEST })
export class ContactService {
  //dependency injection- contact repository
  constructor(
    @InjectRepository(ContactEntity)
    private readonly contactRepository: ContactRepository,
  ) {}

  //service to find all contacts
  async findAll(): Promise<ContactDto[]> {
    return await this.contactRepository.find();
  }

  //service to find contact by id
  findById(id): Promise<ContactDto> {
    return this.contactRepository.findOne(id);
  }

  //service to create all contacts
  async create(contact: ContactDto): Promise<ContactDto> {
    return await this.contactRepository.save(contact);
  }

  //service to modify contacts
  update(contact: ContactDto): Promise<UpdateResult> {
    return this.contactRepository.update(contact.id, contact);
  }

  //service to delete contacts
  async delete(id): Promise<DeleteResult> {
    return await this.contactRepository.delete(id);
  }
}
