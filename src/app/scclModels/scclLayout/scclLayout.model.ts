<<<<<<< HEAD
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
=======
import { IScclHeader, IScclBody } from './';


export interface IScclLayout {
    headerConfig: IScclHeader;
    bodyConfig: IScclBody;
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
}
