import { NgModule } from '@angular/core';
import { ScclStarterComponent } from './scclStarter.component';
import { ScclStarterRouter } from './scclStarter.route';
import { ScclCommonModule } from '../@scclShared/scclCommon/scclCommon.module';
import { ScclStarterService } from './scclStarter.service';
import { ScclLoginComponent } from './scclLogin';
import { ScclHomeComponent } from './scclHome/scclHome.component';




@NgModule({
    imports: [
        ScclStarterRouter,
        ScclCommonModule.forRoot(),
        
    ],
   declarations: [
        ScclStarterComponent,
        ScclLoginComponent,
        ScclHomeComponent
    ],
    providers: [ScclStarterService],
    entryComponents: [
        ScclLoginComponent
    ]
})
export class ScclStarterModule {}
