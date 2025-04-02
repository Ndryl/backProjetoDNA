import { Repository } from 'typeorm';
import { Colecao } from 'src/entities/colecao.enity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ColecaoRepository {
  constructor(
    @InjectRepository(Colecao)
    private readonly repository: Repository<Colecao>,
  ) {}

  async createColecao(data: Partial<Colecao>): Promise<Colecao> {
    const Colecao = this.repository.create(data);
    return this.repository.save(Colecao);
  }

  async findAll(): Promise<Colecao[]> {
    return this.repository.find();
  }

  async findById(id: string): Promise<Colecao | null> {
    return this.repository.findOne({ where: { id } });
  }

  async updateColecao(
    id: string,
    data: Partial<Colecao>,
  ): Promise<Colecao | null> {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  async deleteColecao(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
