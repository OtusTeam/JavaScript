import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity('countries')
export class Country{
    @PrimaryColumn()
    id:number;

    @Column()
    name:string;
}