import { Injectable } from "@angular/core";
import { IScclButton } from "../../../../scclModels/scclComponents";

@Injectable()
export abstract class ScclPanelControlService {

    /*
        toggles the state of a panel (position, dimension, close, open)
        Accepts the button object of the clicked button
    */
   abstract togglePanelState(button: IScclButton, panel: Object): void;
}