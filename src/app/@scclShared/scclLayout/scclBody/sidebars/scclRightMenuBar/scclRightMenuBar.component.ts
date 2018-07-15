import { Component, Input, ChangeDetectorRef, AfterViewInit, OnInit, OnChanges} from '@angular/core';
import { ScclUserContactsComponent} from './scclUserContacts';
import { ScclWidgetBarComponent } from './scclWidgetBar';
import { IScclTab } from '../../../../../scclModels/scclComponents/scclTab';
import { ScclAsideMenuComponent } from '../scclAsideMenu';


@Component({
  selector: 'sccl-right-menu-bar',
  templateUrl: './scclRightMenuBar.html',
  styleUrls: ['./scclRightMenuBar.scss']
})
export class ScclRightMenuBarComponent extends ScclAsideMenuComponent implements OnInit {

    ngOnInit(): void {
      this.scclTab = this.getRightMenuBarTabConfig();
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
