import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    url: configService.get('DATABASE_URL'),
    host: configService.get('DATABASE_HOST'),
    port: +configService.get<number>('DATABASE_PORT'),
    username: configService.get('DATABASE_USERNAME'),
    password: configService.get('DATABASE_PASSWORD'),
    database: configService.get('DATABASE_DATABASE'),
    entities: ['dist/**/*.entity.{ts,js}'],
    synchronize: configService.get<boolean>('DATABASE_DATABASE'),
    ssl: {
      rejectUnauthorized: false,
    },
  }),
  inject: [ConfigService],
};
