import { ScclPanelTogglerService } from "./sccl-panel-toggler.service";
import { Injectable } from "@angular/core";
import { IScclComponentState, IScclButton } from "../../../../scclModels/scclComponents";
declare var $: any;

@Injectable()
export class ScclPanelToggler implements ScclPanelTogglerService {
    toggleAlongAxisX(panel_element, right): void {
        console.log(right)
        $(panel_element).animate({
            right: right,
          }, {
              step: function(now, fx) {
              }
          });
    
    }

    toggleAlongAxisY(pos) {

    }
    toggleSlideOnAxisX() {

    }
    toggleSlideOnAxisY() {

    }
}