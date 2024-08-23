import { IsEmail, MinLength } from "class-validator";

export class CreateLessonDto {
  @MinLength(5)
  title: string;
}
