import { IScclButton } from '../../../scclComponents';
import { IScclDropDownMenu } from '../../../scclComponents/scclDropDownMenu/index.';


export interface IScclMainHeadbar {
    dropDownMenuConfigs: IScclDropDownMenu;
    btnConfigs: {
        B1: IScclButton[];
        B2: IScclButton[];
    };
}
