import { IScclButton } from "../../../scclComponents";

export interface SidebarFunction {
    setMenubarHeight();
    onScreenResize(screenSize);
    btnActions(e): void;

    
    /*
        toggles the state of a panel (position, dimension, close, open)
    */
    togglePanelState(button: IScclButton): void;
}