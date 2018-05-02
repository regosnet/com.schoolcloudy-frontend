import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ScclAcademicsComponent } from './scclAcademics.component';


export const routes: Routes = [
  {
    path: '',
    component: ScclAcademicsComponent
  }
];

export const ScclAcademicsRouter: ModuleWithProviders = RouterModule.forChild(routes);
