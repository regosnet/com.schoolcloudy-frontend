import { Component, OnChanges, OnInit, AfterViewInit } from '@angular/core';
import { ScclTechnicalPanelService } from './scclTechnicalPanel.service';
import { IScclTechnicalPanel } from '../../../scclModels/scclLayout/scclTechnicalPanel';
import { IScclTabHeader, IScclTabBody } from '../../../scclModels/scclComponents';
import { ScclAsidebar } from '../scclBody/sidebars/sccl-aside-bar';
declare var $: any;



@Component({
    selector: 'sccl-technical-panel',
    templateUrl: './scclTechnicalPanel.html',
    styleUrls: ['./scclTechnicalPanel.scss']
})
export class ScclTechnicalPanelComponent extends ScclAsidebar implements AfterViewInit, OnInit, OnChanges, IScclTechnicalPanel{
    tabContent;
    ngOnInit(): void {
        
    }

    ngAfterViewInit() {
        
    }
    ngOnChanges(): void {
        if (this.sidebarConfig !== undefined) {
            this.scclTab = this.scclTPanelService
                                .filterTabElements(this.sidebarConfig, this.tabContent);
        }
        this.setMenubarHeight();
        
    }
    
}



/*
import { Component, AfterViewInit, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import { ScclGlobalService } from '../../scclCommon/scclServices';
import { ScclSettingsComponent } from './scclSettings';
import { ScclSystemInformationComponent } from './scclSystemInformation';
import { ActivatedRoute } from '@angular/router';
import { ScclTechnicalPanelService } from './scclTechnicalPanel.service';
import { ScclLayoutService } from '../scclLayoutServices/scclLayout.service';
import { IScclTab } from '../../../scclModels/scclComponents';
import { Location } from '@angular/common';



@Component({
    selector: 'sccl-technical-panel',
    templateUrl: './scclTechnicalPanel.html',
    styleUrls: ['./scclTechnicalPanel.scss']
})
export class ScclTechnicalPanelComponent implements AfterViewInit, OnInit, OnChanges{
    isTechnicalPanelSlideIn = false;
    technicalPanelTab: IScclTab;

    ngOnInit(): void {
        this.scclGlobalService.subscribe('isLoggedIn', (isLoggedIn) => {
            let tab: IScclTab = this.scclTechnicalPanelService.getTPanelTabElements();
            if (!isLoggedIn) {
                tab.tabHeader = this.scclTechnicalPanelService.filterTabElements(tab.tabHeader);
                tab.tabBody = this.scclTechnicalPanelService.filterTabElements(tab.tabBody);
                this.scclTechnicalPanelService.setTabWidth(tab.tabHeader);
            }else {
                this.scclTechnicalPanelService.setTabWidth(tab.tabHeader);
            }
            this.technicalPanelTab = tab;
            this.cdRef.detectChanges();
        })
    }

    constructor(private scclLayoutService: ScclLayoutService,
                private scclTechnicalPanelService: ScclTechnicalPanelService,
                private scclGlobalService: ScclGlobalService,
                private cdRef: ChangeDetectorRef) {
                
    }

    ngAfterViewInit() {
        
    }
    ngOnChanges(): void {

    }

    togglePanel() {
        this.scclLayoutService.panelSlideToggle();   
    }
}

*/
