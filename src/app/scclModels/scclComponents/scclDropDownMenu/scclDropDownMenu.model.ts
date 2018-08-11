import {
    IScclDropDownMenuHeader,
    IScclDropDownMenuFooter,
<<<<<<< HEAD
    IScclDropDownMenuItemsContainer,
    IScclDropDownProperties
} from './tags';
import { IScclDropDownMenuButton } from '..';
=======
    IScclDropDownMenuItemsContainer
} from './tags';
import { IScclButton } from '..';
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904

export interface IScclDropDownMenu {
    header?: IScclDropDownMenuHeader[];
    itemsContainer?: IScclDropDownMenuItemsContainer[];
    footer?: IScclDropDownMenuFooter[];
<<<<<<< HEAD
    trigger?: IScclDropDownMenuButton;
    properties?: IScclDropDownProperties;
    size?: {height?: number, width: number}
}


=======
    buttonConfigs?: IScclButton;

}
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
