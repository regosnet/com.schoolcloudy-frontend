import { Component, Input, ChangeDetectorRef, AfterViewInit, OnInit, OnChanges} from '@angular/core';
import { ScclGlobalService } from '../../../../scclCommon/scclServices';
import { ScclUserContactsComponent} from './scclUserContacts';
import { ScclWidgetBarComponent } from './scclWidgetBar';
import { ScclSidebar } from '../../../../../scclModels/scclLayout/scclBody/sidebar/scclSidebar';
import { IScclTab } from '../../../../../scclModels/scclComponents/scclTab';


@Component({
  selector: 'sccl-right-menu-bar',
  templateUrl: './scclRightMenuBar.html',
  styleUrls: ['./scclRightMenuBar.scss']
})
export class ScclRightMenuBarComponent extends ScclSidebar implements AfterViewInit, OnInit, OnChanges {

  constructor(private scclGlobalService: ScclGlobalService,
              private cdRef: ChangeDetectorRef) {
                super();
  }

    ngOnInit(): void {
      this.scclTab = this.getRightMenuBarTabConfig();
    }

  ngAfterViewInit(): void {
      this.scclGlobalService.subscribe('screen-dimension', (screenSize) => {
          this.onScreenResize(screenSize);
      });
  }

    ngOnChanges(): void {
        this.setMenubarHeight();
    }

    getRightMenuBarTabConfig(): IScclTab {
      return {
          tabName: 'right-menu-bar-tab',
          tabHeight: 90,
          tabHeader: [
             {title: 'sccl.widgets', class: 's6 tab-one active', ref: 'widgets', id: 'sm-tab'},
             {title: 'sccl.contacts', class: 's6 tab-two', ref: 'contacts', id: 'sm-tab'},
          ],
          tabBody: [
             {id: 'widgets', class: 'tab-1'},
             {id: 'contacts', class: 'tab-2'},
          ],
          tabComponent: [
             {ref: 'widgets', component: ScclWidgetBarComponent},
             {ref: 'contacts', component: ScclUserContactsComponent},
          ]
      };
  }
}
