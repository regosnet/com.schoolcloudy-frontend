import { Component } from '@angular/core';
import { ScclGlobalService } from '../../scclCommon/scclServices';
import { ScclLayoutService } from '../../scclLayout/scclLayoutServices/scclLayout.service';


@Component({
    selector: 'sccl-students',
    templateUrl: './scclStudents.html',
    styleUrls: ['./scclStudents.scss']
})
export class ScclStudentsComponent {
    constructor(private scclLayoutService: ScclLayoutService) {
        this.scclLayoutService.setPageTitle('sccl.students');
    }
}
