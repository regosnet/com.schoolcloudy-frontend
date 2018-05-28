import { IScclComponentState } from "..";

export interface IScclButton {
    buttons?: IButton[]; 
    wrapper?: {
        title?: string,
        icon?: string,
        active?: boolean
    }
}

export interface IScclDropDownMenuButton extends IButton {
    
}

export interface IButton {
    title?: string;
    icon?: string;
    paired_icon?: boolean;
    icons?: {
        icon1?: {
            title?: string,
            id?: string,
            tool_tip?: {
                title?: string
            }
        },
        icon2?: {
            title?: string,
            id?: string,
            tool_tip?: {
                title?: string
            }
        }
    }
    id?: string;
    class?: string;
    tool_tip?: {
        delay?: number,
        position?: string, 
        title?: string,
        html?: boolean
    }
}
