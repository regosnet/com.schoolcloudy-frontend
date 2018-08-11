import { Component } from '@angular/core';
import { ScclGlobalService } from '../../scclCommon/scclServices';
import { ScclLayoutService } from '../../scclLayout/scclLayoutServices/scclLayout.service';


@Component({
    selector: 'sccl-academics',
    templateUrl: './scclAcademics.html',
    styleUrls: ['./scclAcademics.scss']
})
export class ScclAcademicsComponent {
<<<<<<< HEAD
    academics = 'Academics';
=======
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
    constructor(private scclLayoutService: ScclLayoutService) {
        this.scclLayoutService.setPageTitle('sccl.academics');
    }
}
