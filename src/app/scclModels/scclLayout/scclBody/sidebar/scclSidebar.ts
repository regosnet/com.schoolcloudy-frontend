import { IScclSidebar } from './';
import { Input } from '@angular/core';
import { IScclTab } from '../../../scclComponents';


export class ScclSidebar implements IScclSidebar {
    HEIGHT;
    isStaticHeight;
    resolvedComponent;
    menuBarItems;
    menuBarHeight;
    scclTab: IScclTab;
    isClosed;
    isCollapsed: Boolean;
    @Input()
    isLoggedIn;
    @Input()
    sidebarConfig: IScclSidebar;

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
            this.menuBarHeight = screenResize.height - this.HEIGHT;
         }
    }

    toggleAsidePanel(isCollapsed) {
        this.isCollapsed = isCollapsed;
        console.log(this.isCollapsed);
    }
}
