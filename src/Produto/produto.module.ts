import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from 'src/entities/produto.enity';
import { ProdutoRepository } from './produto.repository';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Produto])], // Importa a entidade Produto
  controllers: [ProdutoController],
  providers: [ProdutoService, ProdutoRepository], // Serviços e repositório
})
export class ProdutoModule {}
