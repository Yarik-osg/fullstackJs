import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Form } from '../entities/form.entity';
import { formController } from './controllers/form.controller';
import { formService } from './services/form.service';

@Module({
    imports: [TypeOrmModule.forFeature([Form])],
    controllers: [formController],
    providers: [formService],
})
export class FormModule {}
