import { Input, Output, EventEmitter, Component } from '@angular/core';
import { IScclTab, IScclButton, IScclComponentState } from '../../../../scclModels/scclComponents';
import { IScclAsideBar } from '../../../../scclModels';
import { ScclPanelControlService } from '../../scclLayoutServices';
import { ScclAsideBarService } from './sccl-aside-bar.service';
import { ScclTechnicalPanelService } from '../../scclTechnicalPanel/scclTechnicalPanel.service';
import { ScclGlobalService } from '../../../scclCommon/scclServices';
import { ScclPanelTogglerService } from '../../../scclCommon/scclServices/sccl-panel-toggler/sccl-panel-toggler.service';
import { ScclPanelToggler } from '../../../scclCommon/scclServices/sccl-panel-toggler/sccl-panel-toggler';

@Component({
    selector: 'sccl-aside',
    template: '',
})
export class ScclAsidebar implements IScclAsideBar {
    name;
    isStaticHeight;
    resolvedComponent;
    menuBarItems;
    scclTab: IScclTab;
    footer;
    state: IScclComponentState
    @Input()
    isLoggedIn;
    @Input()
    sidebarConfig: IScclAsideBar;

    constructor(protected scclPanelControlService: ScclPanelControlService,
                protected scclTPanelService: ScclTechnicalPanelService,
                protected panelToggler: ScclPanelTogglerService,
                protected scclGlobalService: ScclGlobalService) {
    }

    setMenubarHeight() {
       /*if (this.sidebarConfig !== undefined) {
            this.isStaticHeight = this.sidebarConfig.isStaticHeight;
            this.HEIGHT = this.sidebarConfig.HEIGHT;
            if (this.isStaticHeight) {
                this.menuBarHeight = window.innerHeight - this.HEIGHT;
            }else {
                this.menuBarHeight = this.HEIGHT;
            }
        }*/
    }
    onScreenResize(screenResize) {
        if (this.isStaticHeight) {
           // this.menuBarHeight = screenResize.height - this.HEIGHT;
         }
    }

    
    btnActions(e): void {
        const btnId = $(e.element).attr('id');
        switch (btnId) {
        case 'minimize-panel-btn':
            break;
        case 'sign_out-btn':
            console.log('signing out..');
            break;
        case 'settings-btn':
            console.log('Settings');
            break;
        case 'clear-btn':
            let right = this.sidebarConfig.state.right;
            right = "-=250";
            this.panelToggler.toggleAlongAxisX('.technical-panel', right);
            break;
        default:
            console.log('Something went wrong');
        }
    }
}
