import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ScclMainComponent } from './scclMain.component';
import { ScclMainRouter } from './scclMain.router';
import { APP_BASE_HREF } from '@angular/common';
import { ScclCommonModule } from './@scclShared/scclCommon/scclCommon.module';
import { ScclLayoutModule } from './@scclShared/scclLayout/scclLayout.module';
import { ScclHomeModule } from './scclHome/scclHome.module';
import { ScclNewsFeedComponent } from './@scclShared/scclPanels/scclNewsFeed/scclNewsFeed.component';
import { ScclGalleryComponent } from './@scclShared/scclPanels/scclGallery/scclGallery.component';
import { ScclSettingsComponent } from './@scclShared/scclPanels/scclSettings/scclSettings.component';
import { ScclSystemComponent } from './@scclShared/scclPanels/scclSystem/scclSystem.component';
import { ScclLoginComponent } from './@scclShared/scclPanels/scclLogin/scclLogin.component';
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
    ScclHomeModule
  ],
  providers: [
    {
        provide: APP_BASE_HREF,
        useValue: '/'
    },
    ScclMainService
  ],
  entryComponents: [
     ScclNewsFeedComponent,
     ScclGalleryComponent,
     ScclSettingsComponent,
     ScclSystemComponent,
     ScclLoginComponent
  ],
  bootstrap: [ScclMainComponent]
})
export class ScclMainModule { }

