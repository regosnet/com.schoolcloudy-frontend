import { Component, OnInit, AfterViewInit} from '@angular/core';
import { ScclAdmininstratorService } from './scclAdministrator.service';



@Component({
    selector: 'sccl-administrator',
    templateUrl: './scclAdministrator.html',
    styleUrls: ['./scclAdministrator.scss']
})
export class ScclAdministratorComponent implements OnInit, AfterViewInit {

    constructor(private scclAdmininstratorService: ScclAdmininstratorService) {
        this.scclAdmininstratorService.notifyUserStatus();
    }

    ngOnInit() {
        
    }

    ngAfterViewInit(): void {
    }
}
