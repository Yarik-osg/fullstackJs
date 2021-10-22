import { Repository } from 'typeorm';
import { Form } from '../../entities/form.entity';
export declare class formService {
    private formRepository;
    constructor(formRepository: Repository<Form>);
    findAll(): Promise<Form[]>;
    findOne(id: string): Promise<Form>;
    create(form: Form): Promise<Form>;
}
