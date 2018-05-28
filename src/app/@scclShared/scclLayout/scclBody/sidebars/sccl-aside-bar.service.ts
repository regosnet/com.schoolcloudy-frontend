import { Injectable } from "@angular/core";
import { ScclPanelControlService } from "../../scclLayoutServices";
import { IScclButton } from "../../../../scclModels/scclComponents";
import { IScclAsideBar } from "../../../../scclModels";

@Injectable()
export class ScclAsideBarService implements ScclPanelControlService {
    
    togglePanelState(e, panel: IScclAsideBar) {
        panel.state.isCollapsed = !panel.state.isCollapsed;
        if (e.button.buttons.length > 1) {
            e.button.wrapper.active = e.button.wrapper.active === false ? true : false;
        }
        //panel.state = panel.state === 'collapsed' ? 'notCollapsed' : 'collapsed';
    }
}