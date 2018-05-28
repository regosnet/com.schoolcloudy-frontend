import {
    IScclDropDownMenuHeader,
    IScclDropDownMenuFooter,
    IScclDropDownMenuItemsContainer,
    IScclDropDownProperties
} from './tags';
import { IScclDropDownMenuButton } from '..';

export interface IScclDropDownMenu {
    header?: IScclDropDownMenuHeader[];
    itemsContainer?: IScclDropDownMenuItemsContainer[];
    footer?: IScclDropDownMenuFooter[];
    trigger?: IScclDropDownMenuButton;
    properties?: IScclDropDownProperties;
    size?: {height?: number, width: number}
}


