import { NgModule } from '@angular/core';
import { ScclManageUsersComponent } from './scclManageUsers.component';
import { ScclManageUsersRouter } from './scclManageUsers.router';



@NgModule({
    imports: [ScclManageUsersRouter],
    declarations: [ScclManageUsersComponent],
})
export class ScclManageUsersModule {
}
