import { Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "./country.entity";


@Entity('users')
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 1024 })
    username: string;

    @Column({ type: 'character varying', length: 200, name: 'email' })
    myEmail: string;


    @Column()
    age:number;
// по умолчанию -джоиним по колонке countryId


    @ManyToOne(type => Country)
    @JoinColumn({ name: 'country_id' })
    country: Promise<Country>;

    @Column({name:'country_id'})
    countryId?:number;

    @Column({name:'fancy_column'})
    fancyColumn: number;
}