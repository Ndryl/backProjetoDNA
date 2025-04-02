import { Injectable } from '@nestjs/common';
import { PedidoRepository } from './pedido.repository';
import { Pedido } from 'src/entities/pedido.enity';

@Injectable()
export class PedidoService {
  constructor(private readonly PedidoRepository: PedidoRepository) {}

  create(data: Partial<Pedido>): Promise<Pedido> {
    return this.PedidoRepository.createPedido(data);
  }

  findAll(): Promise<Pedido[]> {
    return this.PedidoRepository.findAll();
  }

  findById(id: string): Promise<Pedido | null> {
    return this.PedidoRepository.findById(id);
  }

  update(id: string, data: Partial<Pedido>): Promise<Pedido | null> {
    return this.PedidoRepository.updatePedido(id, data);
  }

  delete(id: string): Promise<void> {
    return this.PedidoRepository.deletePedido(id);
  }
}
