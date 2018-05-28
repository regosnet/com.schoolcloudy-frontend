import { AfterViewInit, Input, Directive } from '@angular/core';
import {  scclContants } from '../../scclContants/sccl.constants';
import { ScclLayoutService } from '../../../scclLayout/scclLayoutServices';
import { ScclScrollbarAdapterSerivce } from '../../scclServices';
declare var $: any;


@Directive({
  selector: '[scclTabBody], [scclTabComponent]',
})
export class ScclTabDirective implements AfterViewInit {

    @Input('scclTabComponent')
    scclTabComponent: Array<any>;

    @Input('scclTabBody')
    scclTabBody: HTMLDivElement;

    constructor(
        private scclLayoutService: ScclLayoutService,
        private scclScrollbarAdapter: ScclScrollbarAdapterSerivce) {
       }

    ngAfterViewInit(): void {
        this.scclTabComponent.forEach((compo) => {
            if (compo.ref === $(this.scclTabBody).attr('id')) {
                this.scclLayoutService.resolveComponentView(this.scclTabBody, compo.component);
                this.scclScrollbarAdapter.initializePanelScrollbar(this.scclTabBody);
            }
        });
    }
}

