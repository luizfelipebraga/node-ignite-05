import { Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, Column } from 'typeorm';
import {v4 as uuid} from 'uuid';

@Entity("specifications")
export class Specification {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    create_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}