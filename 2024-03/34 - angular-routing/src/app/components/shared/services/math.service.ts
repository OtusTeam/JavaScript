import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }


  add(a:number, b:number){
    return a+b;
  }

  geomAvg(...rest:number[]){
    if(rest.length===0){
      return 0;
    }

    return Math.pow(rest.reduce((a,b)=>a*b, 1), 1/rest.length);
  }
}
