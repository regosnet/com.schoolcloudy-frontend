import {
    IScclTabBody,
    IScclTabComponent,
    IScclTabHeader
} from './tags';


export interface IScclTab {
    tabHeader: Array<IScclTabHeader>;
    tabBody: Array<IScclTabBody>;
    tabComponent: Array<IScclTabComponent>;
    tabHeight: number;
    tabName: string;
}
