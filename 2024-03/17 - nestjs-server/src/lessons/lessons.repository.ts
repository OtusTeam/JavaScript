import { Injectable } from '@nestjs/common';
import { Lesson } from './interfaces/lesson.interface';
import { LessonsController } from './lessons.controller';

@Injectable()
export class LessonsRepository {
  private lessons: Lesson[] = [
    {
      id: 1,
      title: 'Web-сервер с Nest.js',
    },
    {
      id: 2,
      title: 'Введение в язык SQL, PostgreSQL',
    },
  ];

  findAll(): Lesson[] {
    return this.lessons;
  }

  find(id: number): Lesson | null {
    return this.lessons.find((l) => l.id === id);
  }

  create(newLesson: Omit<Lesson, 'id'>): Lesson {
    this.lessons.push({
      ...newLesson,
      id: this.lessons.length,
    });

    return this.lessons.at(-1)
  }

  update (id: number, lesson: Partial<Lesson>): Lesson | null {
    const index = this.lessons.findIndex(l => l.id === id)
    if (index === -1) {
      return null
    }
    this.lessons[index] = {
      ...this.lessons[index],
      ...lesson,
      id
    }
  }

  remove (id: number) {
    this.lessons = this.lessons.filter(l => l.id !== id)
  }
}
