import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import {
        ScclMessageService, ScclGlobalService
} from "../@scclShared/scclCommon/scclServices";
import { ScclLayoutService } from "../@scclShared/scclLayout/scclLayout.service";
import { TranslateService } from "@ngx-translate/core";
import { SCCL_ADMINISTRATOR_CONFIG } from "./scclAdministrator.configuration";
import { ScclAdmininstratorService } from "./scclAdministrator.service";
import { ScclTabService } from "../@scclShared/scclCommon/scclComponents/scclTab/scclTab.service";


@Component({
    selector: 'sccl-administrator',
    templateUrl: './scclAdministrator.html',
    styleUrls: ['./scclAdministrator.scss']
})
export class ScclAdministratorComponent implements OnInit, AfterViewInit{
    public isLoggedIn;
    public administrator;

    constructor(private scclGlobalService: ScclGlobalService,
            private cdRef:ChangeDetectorRef,private translate: TranslateService,
            private scclMessageService: ScclMessageService,
            private scclAdmininstratorService: ScclAdmininstratorService) {
        this.scclGlobalService.notifyDataChanged('isLoggedIn', {isLoggedIn: true});
        this.scclGlobalService.subscribe('isLoggedIn', (res) => {
            this.isLoggedIn = res.isLoggedIn;
            this.cdRef.detectChanges();
        });
    }

    ngOnInit() {
        this.scclGlobalService.notifyDataChanged('module.configuration', SCCL_ADMINISTRATOR_CONFIG);
        this.scclGlobalService.notifyDataChanged('message.instant', this.scclMessageService.getInstantMessages());
        this.scclGlobalService.notifyDataChanged('message.notification', this.scclMessageService.getNotificationMessages())
        this.scclGlobalService.notifyDataChanged('message.inbox', this.scclMessageService.getInboxMessages());
    }
    
    ngAfterViewInit(): void {
        
        
    }
}