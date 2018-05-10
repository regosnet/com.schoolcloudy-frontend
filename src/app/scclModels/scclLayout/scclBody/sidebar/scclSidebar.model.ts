import { IScclResolvedComponent } from '../..';
import { IScclButton } from '../../../scclComponents';

export interface IScclSidebar {
    /* HEIGHT property is a constant for
    varing the sidebar against window
    height so it could always fit the screen */
    name: string;
    HEIGHT: number;
    menuBarItems;
    menuBarHeight: number;
    isStaticHeight: boolean;
    resolvedComponent?: IScclResolvedComponent;
    isLoggedIn: Boolean;
    isClosed: Boolean;
    width: number;
    isCollapsed: Boolean;
    footer: any,
    state: string;
    setMenubarHeight();
    onScreenResize(screenSize);
    btnActions(e): void;
}
