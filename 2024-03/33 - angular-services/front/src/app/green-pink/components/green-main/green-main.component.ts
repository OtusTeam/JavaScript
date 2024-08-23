import { Component } from '@angular/core';
import { BACKEND_URL } from '../../../shared/tokens';
import { SharedModule } from "../../../shared/shared.module";
import { ThemeService } from '../../../shared/services/theme.service';
import { BaseLoggerService } from '../../../shared/services/base-logger.service';
import { RedLoggerService } from '../../services/red-logger.service';

@Component({
  selector: 'app-green-main',
  templateUrl: './green-main.component.html',
  standalone: true,
  styleUrl: './green-main.component.css',
  providers: [
    //ThemeService,
    { provide: BaseLoggerService, useFactory: () => new RedLoggerService() },
    { provide: ThemeService, useClass: ThemeService },
    { provide: BACKEND_URL, useValue: 'http://localhost:3002' },],
  imports: [SharedModule]
})
export class GreenMainComponent {

}
