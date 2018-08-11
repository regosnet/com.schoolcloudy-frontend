import { Injectable, AfterViewInit } from '@angular/core';
import { ScclSettingsComponent } from './scclSettings';
import { ScclSystemInformationComponent } from './scclSystemInformation';
<<<<<<< HEAD
import { IScclTab, IScclTabHeader } from '../../../scclModels/scclComponents';
import { IScclBody } from '../../../scclModels';
import { IScclComponent } from '../../../scclModels/scclComponents/scclComponent.model';
=======
import { ScclGlobalService } from '../../scclCommon/scclServices';
import { IScclTab } from '../../../scclModels/scclComponents';
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904


@Injectable()
export class ScclTechnicalPanelService {
<<<<<<< HEAD
      param = 'non-valid-user';
      gridWidth = 12;


   static filterTabElements(sidebarConfig: any) {
    const scclTab = this.getTPanelTabElements();
    const tabContent =  sidebarConfig['tabContent'];
    scclTab.tabBody = this.filter(scclTab.tabBody, tabContent);
    scclTab.tabHeader = this.filter(scclTab.tabHeader, tabContent);
    scclTab.tabHeader.map(t => t.class += ' s' + 12 / scclTab.tabHeader.length);
    return scclTab;
  }

  private static filter(tabElement: any[], tabContent): any[] {
      const tabElementContainer: any[] = [];
    Object.keys(tabContent).forEach((prop) => {
        tabElement.forEach((t) => {
            if (t.ref === prop || t.id === prop) {
                tabElementContainer.push(t);
            }
        });
    });
    return tabElementContainer;
  }

   private static getTPanelTabElements(): IScclTab {
      return {
            tabName: 'technical-panel-tab',
            tabHeight: 30,
            tabHeader: [
               {
                   title: 'sccl.settings',
                   class: 'tab-one active',
                   ref: 'settings',
                   id: 'sm-tab'
                },
               {
                   title: 'sccl.system',
                   class: 'tab-two',
                   ref: 'systemInfo',
                   id: 'sm-tab'
                },
            ],
            tabBody: [
               {id: 'settings', class: 'tab-1'},
               {id: 'systemInfo', class: 'tab-2'},
            ],
            tabComponent: [
               {
                   ref: 'settings',
                   component: ScclSettingsComponent
                },
               {
                   ref: 'systemInfo',
                   component: ScclSystemInformationComponent
                },
            ]
        };
=======
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
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
   }
}
