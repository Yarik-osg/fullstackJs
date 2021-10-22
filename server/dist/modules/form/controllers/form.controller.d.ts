import { Form } from '../../entities/form.entity';
import { CreateDto } from './dto';
import { formService } from '../services/form.service';
export declare class formController {
    private readonly formService;
    constructor(formService: formService);
    SaveForm(createDto: CreateDto): Promise<Form>;
}
