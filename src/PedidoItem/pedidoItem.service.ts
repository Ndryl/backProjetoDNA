import { Injectable } from '@nestjs/common';
import { PedidoItensRepository } from './pedidoItem.repository';
import { PedidoItens } from 'src/entities/pedidoItens.enity';

@Injectable()
export class PedidoItensService {
  constructor(private readonly PedidoItensRepository: PedidoItensRepository) {}

  create(data: Partial<PedidoItens>): Promise<PedidoItens> {
    return this.PedidoItensRepository.createPedidoItens(data);
  }

  findAll(): Promise<PedidoItens[]> {
    return this.PedidoItensRepository.findAll();
  }

  findById(id: string): Promise<PedidoItens | null> {
    return this.PedidoItensRepository.findById(id);
  }

  update(id: string, data: Partial<PedidoItens>): Promise<PedidoItens | null> {
    return this.PedidoItensRepository.updatePedidoItens(id, data);
  }

  delete(id: string): Promise<void> {
    return this.PedidoItensRepository.deletePedidoItens(id);
  }
}
