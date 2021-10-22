import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Form } from '../../entities/form.entity';
import { CreateDto } from './dto';
import { formService } from '../services/form.service';

@Controller('form')
export class formController {
    constructor(private readonly formService: formService) {}
    // @Get()
    // getForm(): Promise<Form[]> {
    //   return this.formService.findAll();
    // }

    @Post()
    SaveForm(@Body() createDto: CreateDto): Promise<Form> {
        console.log(createDto);
        const form = new Form();
        form.name = createDto.name;
        form.email = createDto.email;
        form.message = createDto.message;
        return this.formService.create(form);
    }
}
