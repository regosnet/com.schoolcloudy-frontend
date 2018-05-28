import { IScclButton } from '../../../scclComponents';
import { IScclDropDownMenu } from '../../../scclComponents/scclDropDownMenu';


export interface IScclMainHeadbar {
    userMenuConfigs: IScclDropDownMenu;
    notifierConfig: IScclDropDownMenu;
    btns?: {
        btnConfigs?:  IScclButton;
        linkBtnConfigs?: IScclButton;
    }
}
