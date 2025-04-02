import { Repository } from 'typeorm';
import { Pedido } from 'scemas/scema01';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PedidoRepository {
  constructor(
    @InjectRepository(Pedido)
    private readonly repository: Repository<Pedido>,
  ) {}

  async createPedido(data: Partial<Pedido>): Promise<Pedido> {
    const Pedido = this.repository.create(data);
    return this.repository.save(Pedido);
  }

  async findAll(): Promise<Pedido[]> {
    return this.repository.find();
  }

  async findById(id: string): Promise<Pedido | null> {
    return this.repository.findOne({ where: { id } });
  }

  async updatePedido(
    id: string,
    data: Partial<Pedido>,
  ): Promise<Pedido | null> {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  async deletePedido(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
