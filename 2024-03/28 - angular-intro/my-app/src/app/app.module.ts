import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponent } from './components/my/my.component';
import { HighlightDirective } from './highlight.directive';
import { MyPipe } from './my.pipe';
import { GameComponent } from './components/game/game.component';
import { WakaWakaDirective } from './waka-waka.directive';

@NgModule({
    declarations: [
        AppComponent,
        MyComponent,
        HighlightDirective,
        MyPipe,
        GameComponent,
        WakaWakaDirective
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        HighlightDirective
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
