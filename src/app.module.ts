import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import config from './database/db.config';
import { Connection } from 'typeorm';

@Module({
  imports: [config, ContactModule],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
