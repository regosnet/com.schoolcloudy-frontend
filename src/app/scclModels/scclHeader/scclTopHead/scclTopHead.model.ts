import { IScclMessages } from "../../";

export interface IScclTopHead extends IScclMessages{
    isLoggedIn: Boolean;
    isSticky: Boolean;
    isRSHPanelOpen: Boolean;
}