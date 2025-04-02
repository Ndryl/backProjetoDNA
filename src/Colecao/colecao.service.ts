import { Injectable } from '@nestjs/common';
import { ColecaoRepository } from './colecao.repository';
import { Colecao } from 'src/entities/colecao.enity';

@Injectable()
export class ColecaoService {
  constructor(private readonly ColecaoRepository: ColecaoRepository) {}

  create(data: Partial<Colecao>): Promise<Colecao> {
    return this.ColecaoRepository.createColecao(data);
  }

  findAll(): Promise<Colecao[]> {
    return this.ColecaoRepository.findAll();
  }

  findById(id: string): Promise<Colecao | null> {
    return this.ColecaoRepository.findById(id);
  }

  update(id: string, data: Partial<Colecao>): Promise<Colecao | null> {
    return this.ColecaoRepository.updateColecao(id, data);
  }

  delete(id: string): Promise<void> {
    return this.ColecaoRepository.deleteColecao(id);
  }
}
