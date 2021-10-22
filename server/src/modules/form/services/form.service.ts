import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Form } from '../../entities/form.entity';

@Injectable()
export class formService {
    constructor(
        @InjectRepository(Form)
        private formRepository: Repository<Form>,
    ) {}

    findAll(): Promise<Form[]> {
        return this.formRepository.find();
    }

    findOne(id: string): Promise<Form> {
        return this.formRepository.findOne(id);
    }
    create(form: Form): Promise<Form> {
        return this.formRepository.save(form);
    }

}

