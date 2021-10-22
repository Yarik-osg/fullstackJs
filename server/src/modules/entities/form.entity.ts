import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Form {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column('text')
    message: string;
}

