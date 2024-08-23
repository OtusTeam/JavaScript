import { Entity, EntitySchema } from "typeorm";

const UserEntity = new EntitySchema({
    name:'users',
    columns: {
        id: {
            type: Number,
            primary:true,
            generated:true,
        }
    }
})