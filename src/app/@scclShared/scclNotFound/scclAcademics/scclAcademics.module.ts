import { NgModule } from '@angular/core';
import { ScclAcademicsComponent } from './scclAcademics.component';
import { ScclAcademicsRouter } from './scclAcademics.router';



@NgModule({
    imports: [ScclAcademicsRouter],
    declarations: [ScclAcademicsComponent],
})
export class ScclAcademicsModule {
}
