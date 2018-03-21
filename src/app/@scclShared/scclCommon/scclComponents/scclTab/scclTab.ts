import {
    IScclTabBody,
    IScclTab,
    IScclTabComponent,
    IScclTabHeader
} from '../../../../scclModels';


export class ScclTab implements IScclTab {
    tabHeader: IScclTabHeader[];
    tabBody: IScclTabBody[];
    tabComponent: IScclTabComponent[];
    tabHeight: number;
    tabName: string;

    constructor() {
    }
}
