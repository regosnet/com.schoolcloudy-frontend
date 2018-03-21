import { Injectable, AfterViewInit, Injector} from '@angular/core';
import {
    IScclTab
} from '../../../../scclModels';
import { ScclGlobalService } from '../../scclServices';
import { ScclTab } from './scclTab';


@Injectable()
export class ScclTabService {
    private scclTabs: IScclTab[] = [];
    private newTab: IScclTab;

   constructor(private scclGlobalService: ScclGlobalService) {
       this.scclGlobalService.subscribe('scclTabs', (tabs) => {
           this.setTabConfigurations(tabs);
       });
   }

   public setTabConfigurations(tabs: IScclTab[]) {
      if (tabs !== undefined) {
          tabs.forEach((tab) => {
              this.newTab = new ScclTab();
              this.newTab.tabName = tab.tabName;
              this.newTab.tabHeader = tab.tabHeader;
              this.newTab.tabBody = (tab.tabBody);
              this.newTab.tabComponent = tab.tabComponent;
              this.newTab.tabHeight = tab.tabHeight;
              this.scclTabs.push(this.newTab);
          });
      }
      this.scclTabs.forEach((tab) => {
          this.scclGlobalService.notifyDataChanged(tab.tabName, tab);
      });
   }

   public getOneTab(tabName: string) {
       return this.scclTabs.find(x => x.tabName === tabName);
   }

   public getScclTabs() {
       return this.scclTabs;
   }

   public getTabComponentByRef(ref) {
       return this.getScclTabs().map(x => x.tabComponent)
                  .map(x => x.find(fx => fx.ref === ref));
   }
}
