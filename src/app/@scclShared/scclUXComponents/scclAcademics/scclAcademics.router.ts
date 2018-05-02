import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ScclAcademicsComponent } from './scclAcademics.component';
import { ScclStudentsModule } from '../scclStudents/scclStudents.module';
import { ScclParentsModule } from '../scclParents/scclParents.module';


export const routes: Routes = [
  {
    path: '',
    component: ScclAcademicsComponent,
    children: [
        {path: 'students', loadChildren: '../scclStudents/scclStudents.module#ScclStudentsModule'},
        {path: 'parents', loadChildren: '../scclParents/scclParents.module#ScclParentsModule'},
        {path: 'staffs', loadChildren: '../scclStaffs/scclStaffs.module#ScclStaffsModule'}
    ]
  }
];

export const ScclAcademicsRouter: ModuleWithProviders = RouterModule.forChild(routes);
