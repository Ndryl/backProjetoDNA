import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from 'src/entities/pedido.enity';
import { PedidoRepository } from './pedido.repository';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido])], // Importa a entidade Pedido
  controllers: [PedidoController],
  providers: [PedidoService, PedidoRepository], // Serviços e repositório
})
export class PedidoModule {}
