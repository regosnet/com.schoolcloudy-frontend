import {
    IScclDropDownMenuHeader,
    IScclDropDownMenuFooter,
    IScclDropDownMenuItemsContainer
} from './tags';
import { IScclButton } from '..';

export interface IScclDropDownMenu {
    header?: IScclDropDownMenuHeader[];
    itemsContainer?: IScclDropDownMenuItemsContainer[];
    footer?: IScclDropDownMenuFooter[];
    buttonConfigs: any;

}
