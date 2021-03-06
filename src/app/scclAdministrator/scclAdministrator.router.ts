import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { ScclAdministratorComponent } from './scclAdministrator.component';
import { ScclAuthGuard } from '../@scclShared/scclCommon/scclServices';



export const routes: Routes = [
  {
    path: 'administrator',
    canActivate: [ScclAuthGuard],
    component: ScclAdministratorComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', loadChildren: './scclAdminDashboard/scclAdminDashboard.module#ScclAdminDashboardModule'},
      {
        path: 'academics',
        loadChildren: '../@scclShared/scclUXComponents/scclAcademics/scclAcademics.module#ScclAcademicsModule',
        /*data: {
          pageTitle: 'sccl.academics',
          hello: console.log('from the router')
        }*/
      },
<<<<<<< HEAD
=======

      {path: 'manage-users', loadChildren: '../@scclShared/scclUXComponents/scclManageUsers/scclManageUsers.module#ScclManageUsersModule'},
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
      {path: 'taskboard', loadChildren: '../@scclShared/scclUXComponents/scclTaskboard/scclTaskboard.module#ScclTaskboardModule'},
      {path: 'inbox', loadChildren: '../@scclShared/scclUXComponents/scclInbox/scclInbox.module#ScclInboxModule'}
    ]
  }
];

export const ScclAdministratorRouter: ModuleWithProviders = RouterModule.forChild(routes);

