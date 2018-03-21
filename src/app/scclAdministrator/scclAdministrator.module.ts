import { NgModule } from '@angular/core';
import { ScclAdministratorComponent } from './scclAdministrator.component';
import { ScclAdministratorRouter } from './scclAdministrator.router';
import { ScclAdmininstratorService } from './scclAdministrator.service'; 
import { TranslateService } from "@ngx-translate/core"; 
import { ScclGlobalService } from "../@scclShared/scclCommon/scclServices/index";



@NgModule({
    imports: [ScclAdministratorRouter],
    declarations: [ScclAdministratorComponent],
    exports: [ScclAdministratorComponent],
    providers: [ScclAdmininstratorService]
}) 
export class ScclAdministratorModule {
}
