import { IScclSettings, IScclSystemInformation } from "./";
import { IScclAsideBar } from "../scclBody";


export interface IScclTechnicalPanel extends IScclAsideBar {
    tabContent?: {
        settings?: IScclSettings;
        systemInfo?: IScclSystemInformation;
    }
}