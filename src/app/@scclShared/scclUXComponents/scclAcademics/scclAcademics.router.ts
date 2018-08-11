import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ScclAcademicsComponent } from './scclAcademics.component';
import { ScclStudentsModule } from '../scclStudents/scclStudents.module';
<<<<<<< HEAD
=======
import { ScclParentsModule } from '../scclParents/scclParents.module';
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904


export const routes: Routes = [
  {
    path: '',
    component: ScclAcademicsComponent,
    children: [
        {path: 'students', loadChildren: '../scclStudents/scclStudents.module#ScclStudentsModule'},
<<<<<<< HEAD
        /*{path: 'parents', loadChildren: '../scclParents/scclParents.module#ScclParentsModule'},
        {path: 'staffs', loadChildren: '../scclStaffs/scclStaffs.module#ScclStaffsModule'}*/
=======
        {path: 'parents', loadChildren: '../scclParents/scclParents.module#ScclParentsModule'},
        {path: 'staffs', loadChildren: '../scclStaffs/scclStaffs.module#ScclStaffsModule'}
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
    ]
  }
];

export const ScclAcademicsRouter: ModuleWithProviders = RouterModule.forChild(routes);
