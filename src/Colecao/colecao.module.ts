import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Colecao } from 'src/entities/colecao.enity';
import { ColecaoRepository } from './colecao.repository';
import { ColecaoService } from './colecao.service';
import { ColecaoController } from './colecao.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Colecao])], // Importa a entidade Colecao
  controllers: [ColecaoController],
  providers: [ColecaoService, ColecaoRepository], // Serviços e repositório
})
export class ColecaoModule {}
