import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  User,
  Colecao,
  Pedido,
  PedidoItens,
  Posto,
  Produto,
} from 'scemas/scema01'; // Ajuste o caminho conforme sua estrutura
import { UserModule } from './user/user.module';
import { PostoModule } from './Posto/posto.module';
import { ColecaoModule } from './Colecao/colecao.module';
import { PedidoItensModule } from './PedidoItem/pedidoItem.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // 📌 Carrega variáveis do .env
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME || 'user',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'dbname',
      entities: [User, Posto, Colecao, Produto, Pedido, PedidoItens], // ✅ Registrando entidades
      synchronize: process.env.NODE_ENV !== 'production', // ⚠️ Evita problemas em produção!
      autoLoadEntities: true, // 🔹 Garante que novas entidades sejam detectadas automaticamente
    }),

    // 📌 Adicionando módulos específicos para organização
    UserModule,
    PostoModule,
    ColecaoModule,
    PedidoItensModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
