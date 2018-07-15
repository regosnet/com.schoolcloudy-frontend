import { ScclPanelTogglerService } from './sccl-panel-toggler.service';
import { Injectable } from '@angular/core';
import { IScclComponentState, IScclButton } from '../../../../scclModels/scclComponents';
declare var $: any;
/*
This class manages the positions (x, y) and sizes(width, height) of panels.
*/
@Injectable()
export class ScclPanelToggler implements ScclPanelTogglerService {
    slideOnX(element, state) {
        $(element).animate({
            right: state,
          }, {
              step: function(now, fx) {
              }
          });
    }
    slideOnY(element, state) {

    }
}
