import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BACKEND_URL } from '../tokens';
import { Observable } from 'rxjs';

export interface Theme { background: string, front: string }

@Injectable()
export class ThemeService {
  constructor(
    private readonly http: HttpClient,
    @Inject(BACKEND_URL) private readonly baseUrl: string) { }

  theme(): Observable<Theme> {
    return this.http.get<Theme>(`${this.baseUrl}/theme`);
  }

}
