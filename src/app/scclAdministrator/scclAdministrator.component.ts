import { Component, OnInit, AfterViewInit} from '@angular/core';
import { ScclAdmininstratorService } from './scclAdministrator.service';



@Component({
    selector: 'sccl-administrator',
    templateUrl: './scclAdministrator.html',
    styleUrls: ['./scclAdministrator.scss']
})
export class ScclAdministratorComponent implements OnInit, AfterViewInit {

    constructor(private scclAdmininstratorService: ScclAdmininstratorService) {
<<<<<<< HEAD
        this.scclAdmininstratorService.notifyUserStatus();
    }

    ngOnInit() {
        
=======
    }

    ngOnInit() {
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
    }

    ngAfterViewInit(): void {
    }
}
