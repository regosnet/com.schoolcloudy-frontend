import { NgModule } from '@angular/core';
import { ScclStaffsRouter } from '../scclStaffs/scclStaffs.router';
import { ScclStaffsComponent } from '../scclStaffs';



@NgModule({
    imports: [ScclStaffsRouter],
    declarations: [ScclStaffsComponent],
})
export class ScclParentsModule {
}
