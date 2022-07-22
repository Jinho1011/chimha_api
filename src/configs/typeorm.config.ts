import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  host: process.env.DATABASE_HOST,
  port: 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: 'd7tbv8bc6mtt5f ',
  entities: ['dist/**/*.entity.{ts,js}'],
  synchronize: Boolean(process.env.DATABASE_SYNCHRONIZE),
  ssl: {
    rejectUnauthorized: false,
  },
};
