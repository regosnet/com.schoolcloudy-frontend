import { Component } from '@angular/core';
import { ScclGlobalService } from '../../@scclShared/scclCommon/scclServices';
import { ScclAdmininstratorService } from '../scclAdministrator.service';

@Component({
    selector: 'sccl-administrator-dashboard',
    templateUrl: './scclAdministratorDashboard.html',
    styleUrls: ['./scclAdministratorDashboard.scss']
})
export class ScclAdminDashboardComponent {
    constructor(private scclAdminService: ScclAdmininstratorService) {
        this.scclAdminService.setPageTitle('sccl.dashboard');
    }
}
