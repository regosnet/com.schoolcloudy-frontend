import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ScclTaskboardComponent } from './scclTaskboard.component';


export const routes: Routes = [
  {
    path: 'taskboard',
    component: ScclTaskboardComponent
  }
];

export const ScclTaskboardRouter: ModuleWithProviders = RouterModule.forChild(routes);
