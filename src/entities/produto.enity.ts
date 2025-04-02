import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  nome: string;

  @Column()
  quantidade_total: number;

  @Column()
  quantidade_em_colecoes: number;

  @Column()
  quantidade_em_estoque: number;

  @Column()
  quantidade_obstruida: number;

  @CreateDateColumn()
  criado_em: Date;

  @UpdateDateColumn()
  alterado_em: Date;
}
