import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ScclParentsComponent } from '.';



export const routes: Routes = [
  {
    path: '',
    component: ScclParentsComponent
  }
];

export const ScclParentsRouter: ModuleWithProviders = RouterModule.forChild(routes);
