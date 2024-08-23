import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "../db/entities/user.entity";
import { Country } from "../db/entities/country.entity";


const options: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    port: 5432,
    database: 'otus_fancy',
    entities: [User,Country],
    migrationsTableName:'__migrations',
    migrations:['./src/db/migrations']
};

export default new DataSource(options);