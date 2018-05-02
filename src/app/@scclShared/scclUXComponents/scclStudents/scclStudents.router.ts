import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ScclStudentsComponent } from '.';


export const routes: Routes = [
  {
    path: '',
    component: ScclStudentsComponent
  }
];

export const ScclStudentsRouter: ModuleWithProviders = RouterModule.forChild(routes);
