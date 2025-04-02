import { Colecao, Posto, User } from 'scemas/scema01';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Colecao)
  colecao: Colecao;

  @ManyToOne(() => User)
  usuario: User;

  @Column({
    type: 'enum',
    enum: ['PENDENTE', 'APROVADO', 'REJEITADO', 'FINALIZADO'],
  })
  situacao: string;

  @ManyToOne(() => Posto)
  posto_saida: Posto;

  @ManyToOne(() => Posto)
  posto_entrada: Posto;

  @CreateDateColumn()
  criado_em: Date;

  @UpdateDateColumn()
  alterado_em: Date;
}
