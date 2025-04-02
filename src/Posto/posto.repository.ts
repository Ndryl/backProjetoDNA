import { Repository } from 'typeorm';
import { Posto } from 'src/entities/posto.enity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PosotoRepository {
  constructor(
    @InjectRepository(Posto)
    private readonly repository: Repository<Posto>,
  ) {}

  async createPosto(data: Partial<Posto>): Promise<Posto> {
    const posto = this.repository.create(data);
    return this.repository.save(posto);
  }

  async findAll(): Promise<Posto[]> {
    return this.repository.find();
  }

  async findById(id: string): Promise<Posto | null> {
    return this.repository.findOne({ where: { id } });
  }

  async updatePosto(id: string, data: Partial<Posto>): Promise<Posto | null> {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  async deletePosto(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
