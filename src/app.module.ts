import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Conta } from './contas/conta.model';
import { ContaModule } from './contas/conta.module';

@Module({
  imports: [
    ContaModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: 'root',
      database: 'banco',
      entities: [Conta],
      synchronize: true,
      autoLoadEntities: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
