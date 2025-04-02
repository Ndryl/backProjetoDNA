import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosotoRepository } from './posto.repository';
import { PostoController } from './posto.controller';
import { PostoService } from './posto.service';
import { Posto } from 'src/entities/posto.enity';

@Module({
  imports: [TypeOrmModule.forFeature([Posto])], // Importa a entidade Posto
  controllers: [PostoController],
  providers: [PostoService, PosotoRepository], // Serviços e repositório
})
export class PostoModule {}
