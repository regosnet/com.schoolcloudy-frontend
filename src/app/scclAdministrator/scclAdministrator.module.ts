import { NgModule } from '@angular/core';
import { ScclAdministratorComponent } from './scclAdministrator.component';
import { ScclAdministratorRouter } from './scclAdministrator.router';
import { ScclAdmininstratorService } from './scclAdministrator.service';



@NgModule({
    imports: [ScclAdministratorRouter],
    declarations: [ScclAdministratorComponent],
    exports: [ScclAdministratorComponent],
    providers: [ScclAdmininstratorService]
})
export class ScclAdministratorModule {
}
