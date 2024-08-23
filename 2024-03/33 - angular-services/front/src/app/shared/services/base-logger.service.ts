import { Injectable } from '@angular/core';

@Injectable()
export class BaseLoggerService {

  logInfo(t: string) {
    console.log(t);
  }
}
