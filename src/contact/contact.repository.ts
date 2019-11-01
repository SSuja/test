import { Repository } from 'typeorm';
import { ContactEntity } from './contact.entity';

//Repository -provides methods that we can call to run CRUD
export class ContactRepository extends Repository<ContactEntity> {}
