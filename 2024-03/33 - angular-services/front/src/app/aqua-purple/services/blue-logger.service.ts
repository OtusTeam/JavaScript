import { HttpClient, HttpClientModule } from '@angular/common/http';
import { inject, Inject, Injectable, InjectionToken } from '@angular/core';

export const FONT_COLOR = new InjectionToken<string>('FONT_COLOR');

// @Injectable({
//   providedIn: 'root'
// })
export class BlueLoggerService {

  fontColor = inject(FONT_COLOR);

  constructor(
    private readonly http: HttpClient) { }

  logInfo(t: string) {


    console.log('%c %s', `background-color: blue; color: ${this.fontColor}`, t);
    // this.http.get<{ fact: string }>('https://catfact.ninja/fact').subscribe(data => {
    //   alert(data.fact);
    // })

    fetch('https://catfact.ninja/fact').then(x=>x.json()).then(data=>alert(data.fact));
  }
}
