import { Component, Signal } from '@angular/core';
import { Theme, ThemeService } from '../../services/theme.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { BaseLoggerService } from '../../services/base-logger.service';
@Component({
  selector: 'app-ramochka',

  templateUrl: './ramochka.component.html',
  styleUrl: './ramochka.component.css'
})
export class RamochkaComponent {

  theme: Signal<Theme | undefined>;

  constructor(themeService: ThemeService,
    private readonly logSevice: BaseLoggerService
  ) {
    this.theme = toSignal(themeService.theme());
  }

  log() {
    this.logSevice.logInfo(`Текущее время ${new Date()}`)
  }
}
