import { Injectable, AfterViewInit } from '@angular/core';
import { ScclSettingsComponent } from './scclSettings';
import { ScclSystemInformationComponent } from './scclSystemInformation';
import { IScclTab, IScclTabHeader } from '../../../scclModels/scclComponents';
import { IScclBody } from '../../../scclModels';
import { IScclComponent } from '../../../scclModels/scclComponents/scclComponent.model';


@Injectable()
export class ScclTechnicalPanelService {
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
   }
}
