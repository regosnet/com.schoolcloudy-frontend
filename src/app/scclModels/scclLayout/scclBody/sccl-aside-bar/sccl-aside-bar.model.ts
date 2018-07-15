import { IScclResolvedComponent, IScclFooter } from '../..';
import { IScclButton, IScclComponentState } from '../../../scclComponents';

export interface IScclAsideBar {
    name: string;
    menuBarItems?;
    isStaticHeight?: boolean;
    resolvedComponent?: IScclResolvedComponent;
    footer?: IScclFooter;
    state: IScclComponentState;

}
