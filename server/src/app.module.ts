import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormModule } from './modules/form/form.module';
import { Form } from './modules/entities/form.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'form',
      entities: [Form],
      synchronize: true,
    }),
    FormModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

