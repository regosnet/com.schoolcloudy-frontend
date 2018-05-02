import { Component } from '@angular/core';
import { ScclGlobalService } from '../../scclCommon/scclServices';
import { ScclLayoutService } from '../../scclLayout/scclLayoutServices/scclLayout.service';


@Component({
    selector: 'sccl-staffs',
    templateUrl: './scclStaffs.html',
    styleUrls: ['./scclStaffs.scss']
})
export class ScclStaffsComponent {
    staffs = 'Welcome to Staff portal';
    constructor(private scclLayoutService: ScclLayoutService) {
        this.scclLayoutService.setPageTitle('sccl.academics');
    }
}
