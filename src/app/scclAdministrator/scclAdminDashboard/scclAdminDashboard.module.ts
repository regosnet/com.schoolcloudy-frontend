import { NgModule } from '@angular/core';
import { ScclAdminDashboardComponent } from './scclAdminDashboard.component';
import { ScclAdminDashboardRouter } from './scclAdminDashboard.router';



@NgModule({
    imports: [ScclAdminDashboardRouter],
    declarations: [ScclAdminDashboardComponent],
})
export class ScclAdminDashboardModule {
}
