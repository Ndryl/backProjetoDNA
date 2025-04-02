import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoItens } from 'src/entities/pedidoItens.enity';
import { PedidoItensRepository } from './pedidoItem.repository';
import { PedidoItensService } from './pedidoItem.service';
import { PedidoItensController } from './pedidoItem.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PedidoItens])], // Importa a entidade PedidoItens
  controllers: [PedidoItensController],
  providers: [PedidoItensService, PedidoItensRepository], // Serviços e repositório
})
export class PedidoItensModule {}
