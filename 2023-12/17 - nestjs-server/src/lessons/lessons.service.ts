import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { LessonsRepository } from "./lessons.repository";

@Injectable()
export class LessonsService {
  constructor(private readonly repository: LessonsRepository) {
  }


  create(createLessonDto: CreateLessonDto) {
    return this.repository.create(createLessonDto)
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    const lesson = this.repository.find(id)
    if (!lesson) {
      throw new NotFoundException('Lesson not found')
    }
    return this.repository.find(id);
  }

  update(id: number, updateLessonDto: UpdateLessonDto) {
    return this.repository.update(id, updateLessonDto)
  }

  remove(id: number) {
    this.repository.remove(id)
  }
}
