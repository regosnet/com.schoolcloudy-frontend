import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ScclMainComponent } from './scclMain.component';
import { ScclMainRouter } from './scclMain.router';
import { APP_BASE_HREF } from '@angular/common';
import { ScclCommonModule } from './@scclShared/scclCommon/scclCommon.module';
import { ScclLayoutModule } from './@scclShared/scclLayout/scclLayout.module';
import { ScclStarterModule } from './scclStarter/scclStarter.module';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';
import { ScclMainService } from './scclMain.service';



@NgModule({
  declarations: [
    ScclMainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScclMainRouter,
    ScclLayoutModule,
    ScclStarterModule
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

