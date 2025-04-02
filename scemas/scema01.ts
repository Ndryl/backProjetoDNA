import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

// =================== USUÁRIO ===================
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @CreateDateColumn()
  criado_em: Date;

  @UpdateDateColumn()
  alterado_em: Date;
}

// =================== POSTO ===================
@Entity()
export class Posto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  localizacao: string;

  @CreateDateColumn()
  criado_em: Date;

  @UpdateDateColumn()
  alterado_em: Date;
}

// =================== COLEÇÃO ===================
@Entity()
export class Colecao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  usuario: User;

  @Column({ type: 'enum', enum: ['ABERTA', 'FINALIZADA', 'CANCELADA'] })
  situacao: string;

  @CreateDateColumn()
  criado_em: Date;

  @UpdateDateColumn()
  alterado_em: Date;
}

// =================== PRODUTO ===================
@Entity()
export class Produto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
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

// =================== PEDIDO ===================
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

// =================== PEDIDO ITENS ===================
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
