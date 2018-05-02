import { IScclResolvedComponent } from '../..';

export interface IScclSidebar {
    /* HEIGHT property is a constant for
    varing the sidebar against window
    height so it could always fit the screen */
    HEIGHT: number;
    menuBarItems;
    menuBarHeight: number;
    isStaticHeight: boolean;
    resolvedComponent?: IScclResolvedComponent;
    isLoggedIn: Boolean;
    isCollapsed: Boolean;
    isClosed: Boolean;
    setMenubarHeight();
    onScreenResize(screenSize);
}
