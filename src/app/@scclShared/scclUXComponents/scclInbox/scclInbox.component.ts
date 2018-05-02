import { Component } from '@angular/core';
import { ScclGlobalService } from '../../scclCommon/scclServices';
import { ScclLayoutService } from '../../scclLayout/scclLayoutServices/scclLayout.service';


@Component({
    selector: 'sccl-inbox',
    templateUrl: './scclInbox.html',
    styleUrls: ['./scclInbox.scss']
})
export class ScclInboxComponent {
    parents = 'My inbox';
    constructor(private scclLayoutService: ScclLayoutService) {
        this.scclLayoutService.setPageTitle('sccl.inbox');
    }
}
