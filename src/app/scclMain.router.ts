import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';



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
