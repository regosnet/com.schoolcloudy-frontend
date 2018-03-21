import { IScclMessages } from "../../";

export interface IScclMidHead extends IScclMessages{
    isLoggedIn: Boolean;
    isSticky: Boolean;
    isRSHPanelOpen: Boolean;
}