import { Injectable } from '@nestjs/common';
import { PosotoRepository } from './posto.repository';
import { Posto } from 'src/entities/posto.enity';

@Injectable()
export class PostoService {
  constructor(private readonly PostoRepository: PosotoRepository) {}

  create(data: Partial<Posto>): Promise<Posto> {
    return this.PostoRepository.createPosto(data);
  }

  findAll(): Promise<Posto[]> {
    return this.PostoRepository.findAll();
  }

  findById(id: string): Promise<Posto | null> {
    return this.PostoRepository.findById(id);
  }

  update(id: string, data: Partial<Posto>): Promise<Posto | null> {
    return this.PostoRepository.updatePosto(id, data);
  }

  delete(id: string): Promise<void> {
    return this.PostoRepository.deletePosto(id);
  }
}
