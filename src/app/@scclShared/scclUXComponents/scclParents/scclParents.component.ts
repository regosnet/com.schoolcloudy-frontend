import { Component } from '@angular/core';
import { ScclGlobalService } from '../../scclCommon/scclServices';
import { ScclLayoutService } from '../../scclLayout/scclLayoutServices/scclLayout.service';


@Component({
    selector: 'sccl-parents',
    templateUrl: './scclParents.html',
    styleUrls: ['./scclParents.scss']
})
export class ScclParentsComponent {
    parents = 'Welcome to parents portal';
    constructor(private scclLayoutService: ScclLayoutService) {
        this.scclLayoutService.setPageTitle('sccl.parents');
    }
}
