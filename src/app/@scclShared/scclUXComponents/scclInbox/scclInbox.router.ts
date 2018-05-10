import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ScclInboxComponent } from './scclInbox.component';


export const routes: Routes = [
  {
    path: '',
    component: ScclInboxComponent
  }
];

export const ScclInboxRouter: ModuleWithProviders = RouterModule.forChild(routes);
