import { IScclUser } from '../../../..';
import { IDropDownCommon } from '../dropdownCommon';

export interface IScclDropDownMenuItemsContainer extends IDropDownCommon {
    sender?: IScclUser;
    text?: string;
    time?: string;
    typeIcon?: string;
    isRead?: Boolean;
    icon?: string;
    href?: string;
}
