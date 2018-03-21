import { IScclTab } from "../";

export interface IScclHome {
    height: number;
    homeTab: IScclTab[];
    isLoggedIn: Boolean;
    isRSHPanelOpen: Boolean;
}