import { IScclRightSidebar } from './sidebar/scclRightSidebar.model';
import { IScclLeftSidebar } from './sidebar/scclLeftSidebar.model';

export interface IScclBody {
    /* HEIGHT property is a constant for
    varing the sidebar against window
    height so it could always fit the screen */
    HEIGHT: number;
    isLoggedIn: Boolean;
    rightSidebar: IScclRightSidebar;
    leftSidebar: IScclLeftSidebar;
}
