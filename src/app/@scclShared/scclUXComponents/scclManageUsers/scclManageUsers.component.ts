import { Component } from '@angular/core';
import { ScclGlobalService } from '../../scclCommon/scclServices';
import { ScclLayoutService } from '../../scclLayout/scclLayoutServices/scclLayout.service';


@Component({
    selector: 'sccl-manage-users',
    templateUrl: './scclManageUsers.html',
    styleUrls: ['./scclManageUsers.scss']
})
export class ScclManageUsersComponent {
    constructor(private scclLayoutService: ScclLayoutService) {
        this.scclLayoutService.setPageTitle('sccl.academics');
    }
}
