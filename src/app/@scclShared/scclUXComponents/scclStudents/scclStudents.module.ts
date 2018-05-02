import { NgModule } from '@angular/core';
import { ScclStudentsRouter } from './scclStudents.router';
import { ScclStudentsComponent } from '.';



@NgModule({
    imports: [ScclStudentsRouter],
    declarations: [ScclStudentsComponent],
})
export class ScclStudentsModule {
}
