import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity()
export class PedidoItens {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Pedido)
  pedido: Pedido;

  @ManyToOne(() => Produto)
  produto: Produto;

  @Column()
  quantidade: number;
}
