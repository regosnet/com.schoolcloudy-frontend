import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ScclStarterComponent } from './scclStarter.component';
import { ScclGalleryComponent } from '../@scclShared/scclUXComponents/scclGallery';
import { ScclNewsFeedComponent } from '../@scclShared/scclUXComponents/scclNewsFeed';


const routes: Routes = [

    {
        path: '',
        component: ScclStarterComponent,
        children: [
            {
                path: 'gallery',
                component: ScclGalleryComponent
            },
            {
                path: 'news_feed',
                component: ScclNewsFeedComponent
            }
        ]
    }
];

export const ScclStarterRouter: ModuleWithProviders = RouterModule.forChild(routes);
