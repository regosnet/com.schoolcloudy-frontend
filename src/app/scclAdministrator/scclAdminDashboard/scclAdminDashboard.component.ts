import { Component } from '@angular/core';
import { ScclGlobalService } from "../../@scclShared/scclCommon/scclServices";

@Component({
    selector: 'sccl-administrator-dashboard',
    templateUrl: './scclAdministratorDashboard.html',
    styleUrls: ['./scclAdministratorDashboard.scss']
})
export class ScclAdminDashboardComponent {
    constructor(private scclGlobalService: ScclGlobalService) {
        this.scclGlobalService.notifyDataChanged('active-page.title', "sccl.administrator_menu.dashboard_menu.title");
    }
}
