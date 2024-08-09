// DOC: https://www.npmjs.com/package/class-transformer#what-is-class-transformer
import { Expose, plainToClass } from 'class-transformer';

class User {
  @Expose() id!: number;
  @Expose() firstName!: string;
  @Expose() lastName!: string;
}

const fromPlainUser = {
  unkownProp: 'hello there',
  firstName: 'Umed',
  lastName: 'Khudoiberdiev',
};

console.log(plainToClass(User, fromPlainUser, { excludeExtraneousValues: true }));

// User {
//   id: undefined,
//   firstName: 'Umed',
//   lastName: 'Khudoiberdiev'
// }