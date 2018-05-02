import { NgModule } from '@angular/core';
import { ScclStarterComponent } from './scclStarter.component';
import { ScclStarterRouter } from './scclStarter.route';
import { ScclCommonModule } from '../@scclShared/scclCommon/scclCommon.module';
import { ScclAdministratorModule } from '../scclAdministrator/scclAdministrator.module';
import { ScclStarterService } from './scclStarter.service';
import { ScclLoginComponent, ScclLoginService } from './scclLogin';




@NgModule({
    imports: [
        ScclStarterRouter,
        ScclCommonModule.forRoot(),
        ScclAdministratorModule
    ],
   declarations: [
        ScclStarterComponent,
        ScclLoginComponent
    ],
    providers: [ScclStarterService, ScclLoginService],
    entryComponents: [
        ScclLoginComponent
    ]
})
export class ScclStarterModule {}
