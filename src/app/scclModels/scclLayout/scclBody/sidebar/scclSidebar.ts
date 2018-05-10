import { IScclSidebar } from './';
import { Input, Output, EventEmitter } from '@angular/core';
import { IScclTab, IScclButton } from '../../../scclComponents';


export class ScclSidebar implements IScclSidebar {
    name;
    HEIGHT;
    isStaticHeight;
    resolvedComponent;
    menuBarItems;
    menuBarHeight;
    scclTab: IScclTab;
    isClosed;
    width: number;
    footer;
    isCollapsed;
    state;
    @Input()
    isLoggedIn;
    @Input()
    sidebarConfig: IScclSidebar;
    @Output()
    emitSidebarState = new EventEmitter();

    setMenubarHeight() {
       if (this.sidebarConfig !== undefined) {
            this.isStaticHeight = this.sidebarConfig.isStaticHeight;
            this.HEIGHT = this.sidebarConfig.HEIGHT;
            if (this.isStaticHeight) {
                this.menuBarHeight = window.innerHeight - this.HEIGHT;
            }else {
                this.menuBarHeight = this.HEIGHT;
            }
        }
    }
    onScreenResize(screenResize) {
        if (this.isStaticHeight) {
           // this.menuBarHeight = screenResize.height - this.HEIGHT;
         }
    }

    toggleAsidePanel(button: IScclButton) {
        this.sidebarConfig.isCollapsed = !this.sidebarConfig.isCollapsed;
        if (button.buttons.length > 1) {
            button.wrapper.active = button.wrapper.active === false ? true : false;
        }
        this.sidebarConfig.state = this.sidebarConfig.state === 'collapsed' ? 'notCollapsed' : 'collapsed';
        //this.emitSidebarState.emit({state: this.sidebarConfig.state, name: this.sidebarConfig.name});
    }
    
    btnActions(e): void {
        const btnId = $(e.element).attr('id');
        console.log(e)
        switch (btnId) {
        case 'minimize-panel-btn':
            let button = e.button.buttons.find(x => x.id === btnId);
            button.icon = button.icon === 'chevron_right' ? 'chevron_left' : 'chevron_right';
            this.toggleAsidePanel(e.button);
            break;
        case 'sign_out-btn':
            console.log('signing out..');
            break;
        case 'settings-btn':
            console.log('Settings');
            break;
        default:
            console.log('Something went wrong');
        }
    }
}
