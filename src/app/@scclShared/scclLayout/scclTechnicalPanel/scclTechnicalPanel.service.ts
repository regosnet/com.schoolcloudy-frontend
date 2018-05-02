import { Injectable, AfterViewInit } from '@angular/core';
import { ScclSettingsComponent } from './scclSettings';
import { ScclSystemInformationComponent } from './scclSystemInformation';
import { ScclGlobalService } from '../../scclCommon/scclServices';
import { IScclTab } from '../../../scclModels/scclComponents';


@Injectable()
export class ScclTechnicalPanelService {
   private tPanelTab: IScclTab;
   private fullGrid = 12;

   constructor(private scclGlobalService: ScclGlobalService) {
   }
   activateTab(tabConfig: IScclTab) {
      tabConfig.tabHeader.forEach((tab) => {
      });
   }

   getTPanelTabContent(): any[] {
      return [
         {
            head: [
               { title: 'sccl.settings.title', class: 'tab-one active', ref: 'settings', id: 'sm-tab' },
            ],
            body: [
               { id: 'settings', class: 'tab-1' },
            ],
            component: [
               { ref: 'settings', component: ScclSettingsComponent },
            ]
         },
         {
            head: [
               { title: 'sccl.tab.messages', class: 'tab-two', ref: 'system', id: 'sm-tab' },
            ],
            body: [
               { id: 'system', class: 'tab-2' },
            ],
            component: [
               { ref: 'system', component: ScclSystemInformationComponent },
            ]
         }
      ];
   }

   setTechnicalPanelTab(tPanelConfigs: any[]) {
      this.tPanelTab = this.getTPanelTab();
      const tabWidth = this.fullGrid / tPanelConfigs.length;
      tPanelConfigs.forEach((tabConf) => {
            this.getTPanelTabContent().forEach((tab) => {
               if (tab.head.find(x => x.ref === tabConf.name)) {
                  tab.head[0].class += ' s' + tabWidth;
                  this.tPanelTab.tabHeader.push(tab.head[0]);
                  this.tPanelTab.tabBody.push(tab.body[0]);
                  this.tPanelTab.tabComponent.push(tab.component[0]);
               }
            });
         });
      return this.tPanelTab;
   }

   getTPanelTab(): IScclTab {
      return {
         tabName: 'technical-panel-tab',
         tabHeight: 1000,
         tabHeader: [
         ],
         tabBody: [
         ],
         tabComponent: [
         ]
      };
   }
}
