import { Input, Output, EventEmitter, Component, HostListener, OnChanges } from '@angular/core';
import { IScclTab, IScclButton, IScclComponentState } from '../../../../scclModels/scclComponents';
import { IScclAsideBar } from '../../../../scclModels';
import { ScclTechnicalPanelService } from '../../scclTechnicalPanel/scclTechnicalPanel.service';
import { ScclGlobalService } from '../../../scclCommon/scclServices';
import { ScclPanelToggler } from '../../../scclCommon/scclServices/sccl-panel-toggler/sccl-panel-toggler';

@Component({})
export class ScclAsideMenuComponent implements IScclAsideBar, OnChanges {
    name;
    isStaticHeight;
    resolvedComponent;
    menuBarItems;
    scclTab: IScclTab;
    footer;
    state: IScclComponentState;
    @Input()
    isLoggedIn;
    @Input()
    sidebarConfig: IScclAsideBar;

   ngOnChanges(): void {
   }
   constructor(protected tp: ScclPanelToggler) {
   }

    @HostListener('window:resize')
    onScreenResize(screenResize) {
        if (!this.sidebarConfig.isStaticHeight) {
            this.sidebarConfig.state.height = window.innerHeight;
         }
    }

    btnActions(e): void {
        const btnId = $(e.element).attr('id');
        switch (btnId) {
        case 'minimize-panel-btn':
        case 'maximize-panel-btn':
            this.sidebarConfig.state.isCollapsed = !this.sidebarConfig.state.isCollapsed;
            break;
        case 'sign_out-btn':
            console.log('signing out..');
            break;
        case 'settings-btn':
            console.log('Settings');
            break;
        case 'clear-btn':
           this.tp.slideOnX('.technical-panel', '-=250');
            break;
        default:
            console.log(btnId);
        }
    }
}
