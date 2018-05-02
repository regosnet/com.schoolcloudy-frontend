import { NgModule } from '@angular/core';
import { ScclInboxRouter } from './scclInbox.router';
import { ScclInboxComponent } from '.';



@NgModule({
    imports: [ScclInboxRouter],
    declarations: [ScclInboxComponent],
})
export class ScclInboxModule {
}
