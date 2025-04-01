import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from 'scemas/scema01'; // Ajuste o caminho conforme sua estrutura

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME || 'user',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'dbname',
      entities: [User], // ✅ Registre suas entidades aqui!
      synchronize: true, // ⚠️ Apenas para desenvolvimento!
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
