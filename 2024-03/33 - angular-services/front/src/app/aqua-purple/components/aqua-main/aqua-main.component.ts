import { Component } from '@angular/core';
import { BACKEND_URL } from '../../../shared/tokens';
import { ThemeService } from '../../../shared/services/theme.service';
import { SharedModule } from "../../../shared/shared.module";
import { BaseLoggerService } from '../../../shared/services/base-logger.service';
import { BlueLoggerService, FONT_COLOR } from '../../services/blue-logger.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';


class MyHttpClient {
  get<T>(url: string) {
    return of({ fact: 42 });
  }
}
@Component({
  selector: 'app-aqua-main',
  standalone: true,
  templateUrl: './aqua-main.component.html',
  styleUrl: './aqua-main.component.css',
  providers: [
    { provide: HttpClient, useClass: MyHttpClient },
    { provide: FONT_COLOR, useValue: 'purple' },
    // new BlueLoggerService(HttpClient,FONT_COLOR)
    { provide: BaseLoggerService, useClass: BlueLoggerService, deps: [HttpClient] },
    ThemeService,
    { provide: BACKEND_URL, useValue: 'http://localhost:3001' },],
  imports: [SharedModule]
})
export class AquaMainComponent {

}
