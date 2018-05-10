import { Component } from '@angular/core';
import { ScclGlobalService } from '../../scclCommon/scclServices';
import { ScclLayoutService } from '../../scclLayout/scclLayoutServices/scclLayout.service';


@Component({
    selector: 'sccl-academics',
    templateUrl: './scclAcademics.html',
    styleUrls: ['./scclAcademics.scss']
})
export class ScclAcademicsComponent {
    academics = 'Academics';
    constructor(private scclLayoutService: ScclLayoutService) {
        this.scclLayoutService.setPageTitle('sccl.academics');
    }
}
