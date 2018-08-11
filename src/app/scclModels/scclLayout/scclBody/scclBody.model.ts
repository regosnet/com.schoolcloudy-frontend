<<<<<<< HEAD
import { IScclRightSidebar, IScclLeftSidebar } from "./sccl-aside-bar";

=======
import { IScclRightSidebar } from './sidebar/scclRightSidebar.model';
import { IScclLeftSidebar } from './sidebar/scclLeftSidebar.model';
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904

export interface IScclBody {
    /* HEIGHT property is a constant for
    varing the sidebar against window
    height so it could always fit the screen */
    HEIGHT: number;
<<<<<<< HEAD
=======
    isLoggedIn: Boolean;
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
    rightSidebar: IScclRightSidebar;
    leftSidebar: IScclLeftSidebar;
}
