import { Routes } from '@angular/router';
import { PicsComponent } from './pics/pics.component';
import { PicSingleComponent } from './pic-single/pic-single.component';

export const routes: Routes = [
    {
        path: '',
        component: PicsComponent,
    }
    , {
        path: ':id',
        component: PicSingleComponent,
    }
];
