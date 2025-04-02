import { Repository } from 'typeorm';
import { Produto } from 'src/entities/produto.enity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProdutoRepository {
  constructor(
    @InjectRepository(Produto)
    private readonly repository: Repository<Produto>,
  ) {}

  async createProduto(data: Partial<Produto>): Promise<Produto> {
    const Produto = this.repository.create(data);
    return this.repository.save(Produto);
  }

  async findAll(): Promise<Produto[]> {
    return this.repository.find();
  }

  async findById(id: string): Promise<Produto | null> {
    return this.repository.findOne({ where: { id } });
  }

  async updateProduto(
    id: string,
    data: Partial<Produto>,
  ): Promise<Produto | null> {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  async deleteProduto(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
