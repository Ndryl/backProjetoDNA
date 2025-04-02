import { Injectable } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { Produto } from 'src/entities/produto.enity';

@Injectable()
export class ProdutoService {
  constructor(private readonly ProdutoRepository: ProdutoRepository) {}

  create(data: Partial<Produto>): Promise<Produto> {
    return this.ProdutoRepository.createProduto(data);
  }

  findAll(): Promise<Produto[]> {
    return this.ProdutoRepository.findAll();
  }

  findById(id: string): Promise<Produto | null> {
    return this.ProdutoRepository.findById(id);
  }

  update(id: string, data: Partial<Produto>): Promise<Produto | null> {
    return this.ProdutoRepository.updateProduto(id, data);
  }

  delete(id: string): Promise<void> {
    return this.ProdutoRepository.deleteProduto(id);
  }
}
