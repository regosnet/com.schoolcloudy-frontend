import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ScclManageUsersComponent } from './scclManageUsers.component';


export const routes: Routes = [
  {
    path: '',
    component: ScclManageUsersComponent
  }
];

export const ScclManageUsersRouter: ModuleWithProviders = RouterModule.forChild(routes);
