import { IScclHeader, IScclBody, IScclFooter } from './';
import { IScclTechnicalPanel } from './scclTechnicalPanel';
import { IScclButton } from '../scclComponents';


export interface IScclLayout {
    height: number;
    isLoggedIn: boolean;
    resizeWidth: boolean;
    bodyConfig: IScclBody;
    headConfig: IScclHeader;
    scclTheme: string;
    technicalPanel?: IScclTechnicalPanel;
    footer: IScclFooter;
}
