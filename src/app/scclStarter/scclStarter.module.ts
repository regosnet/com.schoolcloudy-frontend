import { NgModule } from '@angular/core';
import { ScclStarterComponent } from './scclStarter.component';
import { ScclStarterRouter } from './scclStarter.route';
import { ScclCommonModule } from '../@scclShared/scclCommon/scclCommon.module';
<<<<<<< HEAD
import { ScclStarterService } from './scclStarter.service';
import { ScclLoginComponent } from './scclLogin';
import { ScclHomeComponent } from './scclHome/scclHome.component';
=======
import { ScclAdministratorModule } from '../scclAdministrator/scclAdministrator.module';
import { ScclStarterService } from './scclStarter.service';
import { ScclLoginComponent, ScclLoginService } from './scclLogin';
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904




@NgModule({
    imports: [
        ScclStarterRouter,
        ScclCommonModule.forRoot(),
<<<<<<< HEAD
        
    ],
   declarations: [
        ScclStarterComponent,
        ScclLoginComponent,
        ScclHomeComponent
    ],
    providers: [ScclStarterService],
=======
        ScclAdministratorModule
    ],
   declarations: [
        ScclStarterComponent,
        ScclLoginComponent
    ],
    providers: [ScclStarterService, ScclLoginService],
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
    entryComponents: [
        ScclLoginComponent
    ]
})
export class ScclStarterModule {}
