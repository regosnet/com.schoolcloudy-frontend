import { NgModule } from '@angular/core';
import { ScclHomeComponent } from './scclHome.component';
import { ScclHomeRouter } from './scclHome.route';
import { ScclCommonModule } from '../@scclShared/scclCommon/scclCommon.module';
import { ScclLoginComponent } from '../@scclShared/scclPanels/scclLogin/scclLogin.component';
import { ScclAdministratorModule } from '../scclAdministrator/scclAdministrator.module';
import { ScclHomeService } from './scclHome.service';



@NgModule({
    imports: [
        ScclHomeRouter,
        ScclCommonModule.forRoot(),
        ScclAdministratorModule
    ],

   declarations: [
        ScclHomeComponent,
        ScclLoginComponent
    ],
    providers: [ScclHomeService]
})
export class ScclHomeModule {}
