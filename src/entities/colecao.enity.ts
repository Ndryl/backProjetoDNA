import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Colecao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  nome: string;

  @Column({ type: 'enum', enum: ['ABERTA', 'FINALIZADA', 'CANCELADA'] })
  situacao: string;

  @CreateDateColumn()
  criado_em: Date;

  @UpdateDateColumn()
  alterado_em: Date;
}
