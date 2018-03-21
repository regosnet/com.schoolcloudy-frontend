import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ScclSettingsComponent } from "../../../scclPanels/scclSettings/scclSettings.component";
import { ScclSystemComponent } from "../../../scclPanels/scclSystem/scclSystem.component";
import { IScclTab } from "../../../../scclModels";
import { ScclRSHPanelService } from "./ScclRSHPanel.service";
import { ScclGlobalService } from "../../../scclCommon/scclServices";
import { ScclTabService } from "../../../scclCommon/scclComponents/scclTab/scclTab.service";


@Component({
    selector: 'sccl-rsh-panel', 
    templateUrl: './scclRSHPanel.html',
    styleUrls: ['./scclRSHPanel.scss']
})
export class ScclRSHPanelComponent implements AfterViewInit, OnInit {
    width: 700;
    isRSHPanelOpen = false;
    isLoggedIn;
    rshTab : IScclTab
    
    ngOnInit():void {
        
        this.scclGlobalService.subscribe('isRSHPanelOpen', (res) => {
            this.isRSHPanelOpen = res.isRSHPanelOpen;
        })
        
        this.scclGlobalService.subscribe('isLoggedIn', (res) => {
            this.isLoggedIn = res.isLoggedIn;
        })
    }
    
    constructor(private scclGlobalService: ScclGlobalService) {
        this.scclGlobalService.subscribe('aside-togglable-tab', (tab) => {
            this.rshTab = tab
        })
    }
    
    ngAfterViewInit() {
        
    }
}