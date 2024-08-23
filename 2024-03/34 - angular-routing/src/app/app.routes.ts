import { Routes } from '@angular/router';
import { RegisterUserPageComponent } from './components/pages/register-user-page/register-user-page.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { PicSingleComponent } from './components/pages/pics/pic-single/pic-single.component';
import { PicsComponent } from './components/pages/pics/pics/pics.component';

export const routes: Routes = [
    {
        path: 'register',
        component: RegisterUserPageComponent,
    },
    {
        path: 'pics',
        loadChildren: () => import('./components/pages/pics/pics.module').then(x => x.PicsModule)
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];
