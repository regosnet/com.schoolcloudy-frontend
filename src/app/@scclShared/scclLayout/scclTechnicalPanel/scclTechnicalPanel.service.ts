import { Injectable, AfterViewInit } from '@angular/core';
import { ScclSettingsComponent } from './scclSettings';
import { ScclSystemInformationComponent } from './scclSystemInformation';
import { ScclGlobalService } from '../../scclCommon/scclServices';
import { IScclTab, IScclTabHeader } from '../../../scclModels/scclComponents';


@Injectable()
export class ScclTechnicalPanelService {
      param = 'non-valid-user';
      gridWidth = 12;

   constructor(private scclGlobalService: ScclGlobalService) {
   }

   filterTabElements(tabElement: any[]): any[] {
      return tabElement.filter(tab => tab.active === this.param);
  }

  setTabWidth(tabElement: IScclTabHeader[]){
      console.log(tabElement.length);
      tabElement.map(tab => tab.class += ' s' + this.gridWidth/tabElement.length);
  }

   getTPanelTabElements(): IScclTab {
      return {
            tabName: 'technical-panel-tab',
            tabHeight: 30,
            tabHeader: [
               {
                   title: 'sccl.settings', 
                   class: 'tab-one active', 
                   ref: 'settings', 
                   id: 'sm-tab',
                   active: 'non-valid-user'
                },
               {
                   title: 'sccl.system',
                   class: 'tab-two',
                   ref: 'system',
                   id: 'sm-tab',
                   active: 'valid-user'
                },
            ],
            tabBody: [
               {id: 'settings', class: 'tab-1', active: 'non-valid-user'},
               {id: 'system', class: 'tab-2', active: 'valid-user'},
            ],
            tabComponent: [
               {
                   ref: 'settings',
                   component: ScclSettingsComponent,
                   active: 'non-valid-user'
                },
               {
                   ref: 'system',
                   component: ScclSystemInformationComponent,
                   active: 'valid-user'
                },
            ]
        };
   }
}
