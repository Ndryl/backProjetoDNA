import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
} from 'typeorm';

@Entity()
export class Posto {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ length: 100 })
  nome: string;
  @Column({ length: 100 })
  localizacao: string;
  @CreateDateColumn()
  criado_em: Date;
  @UpdateDateColumn()
  alterado_em: Date;
}
