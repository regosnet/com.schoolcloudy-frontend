import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ScclStarterComponent } from './scclStarter.component';
import { ScclGalleryComponent } from '../@scclShared/scclUXComponents/scclGallery';
import { ScclNewsFeedComponent } from '../@scclShared/scclUXComponents/scclNewsFeed';
<<<<<<< HEAD
import { ScclLoginComponent } from './scclLogin';
import { ScclHomeComponent } from './scclHome/scclHome.component';
=======
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904


const routes: Routes = [

    {
        path: '',
        component: ScclStarterComponent,
        children: [
<<<<<<< HEAD
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {
                path: 'home',
                component: ScclHomeComponent
            },
=======
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
            {
                path: 'gallery',
                component: ScclGalleryComponent
            },
            {
                path: 'news_feed',
                component: ScclNewsFeedComponent
            }
<<<<<<< HEAD
            ,
            {
                path: 'login',
                component: ScclLoginComponent
            }
=======
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
        ]
    }
];

export const ScclStarterRouter: ModuleWithProviders = RouterModule.forChild(routes);
