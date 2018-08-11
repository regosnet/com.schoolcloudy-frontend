<<<<<<< HEAD
import { Component, OnChanges } from '@angular/core';
import { ScclAsideMenuComponent } from '../scclBody/sidebars/scclAsideMenu';
import { IScclTechnicalPanel } from '../../../scclModels/scclLayout/scclTechnicalPanel';
import { ScclTechnicalPanelService } from './scclTechnicalPanel.service';
import { ScclPanelToggler } from '../../scclCommon/scclServices';
declare var $: any;
=======
import { Component, AfterViewInit, OnInit, ChangeDetectorRef } from '@angular/core';
import { ScclGlobalService } from '../../scclCommon/scclServices';
import { ScclSettingsComponent } from './scclSettings';
import { ScclSystemInformationComponent } from './scclSystemInformation';
import { ActivatedRoute } from '@angular/router';
import { ScclTechnicalPanelService } from './scclTechnicalPanel.service';
import { ScclLayoutService } from '../scclLayoutServices/scclLayout.service';
import { IScclTab } from '../../../scclModels/scclComponents';
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904



@Component({
    selector: 'sccl-technical-panel',
    templateUrl: './scclTechnicalPanel.html',
    styleUrls: ['./scclTechnicalPanel.scss']
})
<<<<<<< HEAD
export class ScclTechnicalPanelComponent
       extends ScclAsideMenuComponent
       implements IScclTechnicalPanel, OnChanges {
    ngOnChanges(): void {
        if (this.sidebarConfig !== undefined) {
            this.scclTab = ScclTechnicalPanelService.filterTabElements(this.sidebarConfig);
        }
    }
=======
export class ScclTechnicalPanelComponent implements AfterViewInit, OnInit {
    isTechnicalPanelSlideIn = false;
    technicalPanelTab: IScclTab = {
        tabName: 'technical-panel-tab',
        tabHeight: 30,
        tabHeader: [
           {title: 'sccl.settings.title', class: 's6 tab-one active', ref: 'settings', id: 'sm-tab'},
           {title: 'sccl.system', class: 's6 tab-two', ref: 'system', id: 'sm-tab'},
        ],
        tabBody: [
           {id: 'settings', class: 'tab-1'},
           {id: 'system', class: 'tab-2'},
        ],
        tabComponent: [
           {ref: 'settings', component: ScclSettingsComponent},
           {ref: 'system', component: ScclSystemInformationComponent},
        ]
    };

    ngOnInit(): void {
        this.initializeTechnicalPanel();
    }

    constructor(private scclLayoutService: ScclLayoutService,
                private scclTechnicalPanelService: ScclTechnicalPanelService,
                private scclGlobalService: ScclGlobalService) {
    }

    ngAfterViewInit() {
    }

    togglePanel() {
        this.scclLayoutService.panelSlideToggle();
    }

    initializeTechnicalPanel() {
        this.scclGlobalService.subscribe('technicalPanel', (tPanelConfigs: any[]) => {
            this.technicalPanelTab = null;
          this.technicalPanelTab = this.scclTechnicalPanelService.setTechnicalPanelTab(tPanelConfigs);
        });
     }
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
}
