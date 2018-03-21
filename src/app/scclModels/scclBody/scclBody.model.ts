import { IScclTab } from "../";

export interface IScclBody {
    height: number;
    isLoggedIn: Boolean;
    isRSHPanelOpen: Boolean;
    scclTabs: IScclTab[]
}