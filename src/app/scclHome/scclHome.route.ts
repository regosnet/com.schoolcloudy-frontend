import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ScclLoginComponent } from '../@scclShared/scclPanels/scclLogin/scclLogin.component';
import { ScclHomeComponent } from './scclHome.component';

const routes: Routes = [
    {
        path: '',
        component: ScclHomeComponent
    }
];

export const ScclHomeRouter: ModuleWithProviders = RouterModule.forChild(routes);
