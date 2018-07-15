import { IScclButton } from '../../../scclComponents';
import { IScclDropDownMenu } from '../../../scclComponents/scclDropDownMenu';


export interface IScclMainHeadbar {
    userMenuConfigs?: IScclDropDownMenu;
    userMenuConfigs2?: IScclDropDownMenu;
    notifierConfig?: IScclDropDownMenu;
    btns?: {
        btnConfigs?:  IScclButton;
        linkBtnConfigs?: IScclButton;
    }
}
