
export interface IScclButton {
    buttons?: Button[]; 
    wrapper?: {
        title?: string,
        icon?: string,
        active?: boolean
    }
}

interface Button{
    
    title?: string;
    icon?: string;
    type: string;
    id?: string;
    class?: string;
    tool_tip?: {
        title?: string;
        data_placement?: string
    };
    
}
