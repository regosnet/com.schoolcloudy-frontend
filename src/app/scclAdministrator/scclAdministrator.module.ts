import { NgModule } from '@angular/core';
import { ScclAdministratorComponent } from './scclAdministrator.component';
import { ScclAdministratorRouter } from './scclAdministrator.router';
import { ScclAdmininstratorService } from './scclAdministrator.service';
<<<<<<< HEAD
=======
import { TranslateService } from '@ngx-translate/core';
import { ScclGlobalService } from '../@scclShared/scclCommon/scclServices';
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904



@NgModule({
    imports: [ScclAdministratorRouter],
    declarations: [ScclAdministratorComponent],
    exports: [ScclAdministratorComponent],
    providers: [ScclAdmininstratorService]
})
export class ScclAdministratorModule {
}
