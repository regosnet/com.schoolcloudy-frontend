import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ScclStaffsComponent } from '.';


export const routes: Routes = [
  {
    path: '',
    component: ScclStaffsComponent
  }
];

export const ScclStaffsRouter: ModuleWithProviders = RouterModule.forChild(routes);
