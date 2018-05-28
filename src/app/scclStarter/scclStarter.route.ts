import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ScclStarterComponent } from './scclStarter.component';
import { ScclGalleryComponent } from '../@scclShared/scclUXComponents/scclGallery';
import { ScclNewsFeedComponent } from '../@scclShared/scclUXComponents/scclNewsFeed';
import { ScclLoginComponent } from './scclLogin';
import { ScclHomeComponent } from './scclHome/scclHome.component';


const routes: Routes = [

    {
        path: '',
        component: ScclStarterComponent,
        children: [
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {
                path: 'home',
                component: ScclHomeComponent
            },
            {
                path: 'gallery',
                component: ScclGalleryComponent
            },
            {
                path: 'news_feed',
                component: ScclNewsFeedComponent
            }
            ,
            {
                path: 'login',
                component: ScclLoginComponent
            }
        ]
    }
];

export const ScclStarterRouter: ModuleWithProviders = RouterModule.forChild(routes);
