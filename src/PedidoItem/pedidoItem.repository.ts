import { Repository } from 'typeorm';
import { PedidoItens } from 'src/entities/pedidoItens.enity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PedidoItensRepository {
  constructor(
    @InjectRepository(PedidoItens)
    private readonly repository: Repository<PedidoItens>,
  ) {}

  async createPedidoItens(data: Partial<PedidoItens>): Promise<PedidoItens> {
    const PedidoItens = this.repository.create(data);
    return this.repository.save(PedidoItens);
  }

  async findAll(): Promise<PedidoItens[]> {
    return this.repository.find();
  }

  async findById(id: string): Promise<PedidoItens | null> {
    return this.repository.findOne({ where: { id } });
  }

  async updatePedidoItens(
    id: string,
    data: Partial<PedidoItens>,
  ): Promise<PedidoItens | null> {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  async deletePedidoItens(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
