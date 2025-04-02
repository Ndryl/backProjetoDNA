import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid') // Gera um UUID automaticamente
  id: string;

  @Column({ length: 100 })
  nome: string;

  @Column({ unique: true }) // Garante que o email seja único
  email: string;

  @CreateDateColumn() // Armazena a data de criação
  criadoEm: Date;

  @UpdateDateColumn() // Atualiza automaticamente quando há mudanças
  alteradoEm: Date;
}
