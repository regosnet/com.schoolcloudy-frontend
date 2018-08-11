import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ScclMainComponent } from './scclMain.component';
import { ScclMainRouter } from './scclMain.router';
import { APP_BASE_HREF } from '@angular/common';
import { ScclCommonModule } from './@scclShared/scclCommon/scclCommon.module';
import { ScclLayoutModule } from './@scclShared/scclLayout/scclLayout.module';
import { ScclStarterModule } from './scclStarter/scclStarter.module';
<<<<<<< HEAD
=======
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
import { ScclMainService } from './scclMain.service';
import { ScclAdministratorModule } from './scclAdministrator/scclAdministrator.module';



@NgModule({
  declarations: [
    ScclMainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScclMainRouter,
    ScclLayoutModule,
<<<<<<< HEAD
    ScclStarterModule,
    ScclAdministratorModule
=======
    ScclStarterModule
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
  ],
  providers: [
    {
        provide: APP_BASE_HREF,
        useValue: '/'
    },
    ScclMainService
  ],
  bootstrap: [ScclMainComponent]
})
export class ScclMainModule { }

