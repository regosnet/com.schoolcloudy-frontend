import { Component } from '@angular/core';
import { ScclGlobalService } from '../../scclCommon/scclServices';
import { ScclLayoutService } from '../../scclLayout/scclLayoutServices/scclLayout.service';


@Component({
    selector: 'sccl-taskboard',
    templateUrl: './scclTaskboard.html',
    styleUrls: ['./scclTaskboard.scss']
})
export class ScclTaskboardComponent {
    constructor(private scclLayoutService: ScclLayoutService) {
        this.scclLayoutService.setPageTitle('sccl.taskboard');
    }
}
