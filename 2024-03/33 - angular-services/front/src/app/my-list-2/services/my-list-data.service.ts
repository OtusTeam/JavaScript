import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

 @Injectable()
export class MyListDataService {

  constructor(private readonly http: HttpClient) {
    console.log('242242');
  }

  public data: string[] = [];

  public add(text: string) {
    this.data.push(text);
  }

}
