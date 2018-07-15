import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ScclMainComponent } from './scclMain.component';
import { ScclMainRouter } from './scclMain.router';
import { APP_BASE_HREF } from '@angular/common';
import { ScclCommonModule } from './@scclShared/scclCommon/scclCommon.module';
import { ScclLayoutModule } from './@scclShared/scclLayout/scclLayout.module';
import { ScclStarterModule } from './scclStarter/scclStarter.module';
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
    ScclStarterModule,
    ScclAdministratorModule
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

