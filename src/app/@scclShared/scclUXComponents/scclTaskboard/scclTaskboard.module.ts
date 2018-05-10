import { NgModule } from '@angular/core';
import { ScclTaskboardComponent } from './scclTaskboard.component';
import { ScclTaskboardRouter } from './scclTaskboard.router';




@NgModule({
    imports: [ScclTaskboardRouter],
    declarations: [ScclTaskboardComponent],
})
export class ScclTaskboardModule {
}
