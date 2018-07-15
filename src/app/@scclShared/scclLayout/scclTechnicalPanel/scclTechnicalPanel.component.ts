import { Component, OnChanges } from '@angular/core';
import { ScclAsideMenuComponent } from '../scclBody/sidebars/scclAsideMenu';
import { IScclTechnicalPanel } from '../../../scclModels/scclLayout/scclTechnicalPanel';
import { ScclTechnicalPanelService } from './scclTechnicalPanel.service';
import { ScclPanelToggler } from '../../scclCommon/scclServices';
declare var $: any;



@Component({
    selector: 'sccl-technical-panel',
    templateUrl: './scclTechnicalPanel.html',
    styleUrls: ['./scclTechnicalPanel.scss']
})
export class ScclTechnicalPanelComponent
       extends ScclAsideMenuComponent
       implements IScclTechnicalPanel, OnChanges {
    ngOnChanges(): void {
        if (this.sidebarConfig !== undefined) {
            this.scclTab = ScclTechnicalPanelService.filterTabElements(this.sidebarConfig);
        }
    }
}
