import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // Indica que esta classe é uma entidade do banco de dados
export class User {
  @PrimaryGeneratedColumn('uuid') // Chave primária autoincrementável
  id: string;

  @Column() // Coluna padrão (varchar no PostgreSQL/MySQL)
  name: string;

  @Column({ unique: true }) // Coluna com valor único (para e-mails, CPF, etc.)
  email: string;

  @Column({ select: false }) // Oculta este campo em consultas padrão (útil para senhas)
  password: string;

  @Column({ default: true }) // Valor padrão
  isActive: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) // Data de criação
  createdAt: Date;
}
