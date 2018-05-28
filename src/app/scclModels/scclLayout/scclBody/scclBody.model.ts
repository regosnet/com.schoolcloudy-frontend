import { IScclRightSidebar, IScclLeftSidebar } from "./sccl-aside-bar";


export interface IScclBody {
    /* HEIGHT property is a constant for
    varing the sidebar against window
    height so it could always fit the screen */
    HEIGHT: number;
    rightSidebar: IScclRightSidebar;
    leftSidebar: IScclLeftSidebar;
}
