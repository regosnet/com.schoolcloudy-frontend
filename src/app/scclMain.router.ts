import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ScclMainComponent } from './scclMain.component';
import { ScclHomeComponent } from './scclHome/scclHome.component';
import { ScclLoginComponent } from './@scclShared/scclPanels/scclLogin/scclLogin.component';



const routes: Routes = [

  /*{
      path: '**',
      redirectTo: 'not-found'
  },

  {
      path: 'not-found',
      loadChildren: './@scclShared/scclNotFound/scclNotFound.module#ScclNotFoundModule'
  }*/
];

export const ScclMainRouter: ModuleWithProviders = RouterModule.forRoot(routes);
