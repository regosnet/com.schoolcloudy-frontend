import { IScclButton } from '../../../scclComponents';
<<<<<<< HEAD
import { IScclDropDownMenu } from '../../../scclComponents/scclDropDownMenu';


export interface IScclMainHeadbar {
    userMenuConfigs?: IScclDropDownMenu;
    userMenuConfigs2?: IScclDropDownMenu;
    notifierConfig?: IScclDropDownMenu;
    btns?: {
        btnConfigs?:  IScclButton;
        linkBtnConfigs?: IScclButton;
    }
=======
import { IScclDropDownMenu } from '../../../scclComponents/scclDropDownMenu/index.';


export interface IScclMainHeadbar {
    dropDownMenuConfigs: IScclDropDownMenu;
    btnConfigs: {
        B1: IScclButton[];
        B2: IScclButton[];
    };
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
}
