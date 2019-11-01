import { TypeOrmModule } from '@nestjs/typeorm';
const config = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'contact',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
});
export default config;

//Database Authentification
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'
