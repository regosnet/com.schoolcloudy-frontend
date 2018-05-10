import { AfterViewInit,
        ComponentFactoryResolver,
        Injector, ApplicationRef,
        Input, Directive } from '@angular/core';
import {  scclContants } from '../../scclContants/sccl.constants';
import { ScclLayoutService } from '../../../scclLayout/scclLayoutServices';
declare var $: any;


@Directive({
  selector: '[scclTabBody], [scclTabComponent]',
})
export class ScclTabDirective implements AfterViewInit {

    @Input('scclTabComponent')
    scclTabComponent: Array<any>;

    @Input('scclTabBody')
    scclTabBody: HTMLDivElement;

    constructor(private scclLayoutService: ScclLayoutService) {
       }

    ngAfterViewInit(): void {
        $('ul.tabs').tabs();
        this.scclTabComponent.forEach((compo) => {
            if (compo.ref === $(this.scclTabBody).attr('id')) {
                this.scclLayoutService.resolveComponentView(this.scclTabBody, compo.component);
                this.scclLayoutService.activateScrollbar(this.scclTabBody);
            }
        });
    }
}

