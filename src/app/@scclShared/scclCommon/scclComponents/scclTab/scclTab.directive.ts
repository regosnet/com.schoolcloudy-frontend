<<<<<<< HEAD
import { AfterViewInit, Input, Directive } from '@angular/core';
import { ScclLayoutService } from '../../../scclLayout/scclLayoutServices';
import { ScclComponentViewResolverService } from '../../scclServices/scclComponentViewResolver';
=======
import { AfterViewInit,
        ComponentFactoryResolver,
        Injector, ApplicationRef,
        Input, Directive } from '@angular/core';
import {  scclContants } from '../../scclContants/sccl.constants';
import { ScclLayoutService } from '../../../scclLayout/scclLayoutServices';
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
declare var $: any;


@Directive({
  selector: '[scclTabBody], [scclTabComponent]',
})
export class ScclTabDirective implements AfterViewInit {

    @Input('scclTabComponent')
    scclTabComponent: Array<any>;

    @Input('scclTabBody')
    scclTabBody: HTMLDivElement;

<<<<<<< HEAD
    constructor(
        private componentViewResolver: ScclComponentViewResolverService) {
=======
    constructor(private scclLayoutService: ScclLayoutService) {
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
       }

    ngAfterViewInit(): void {
        this.scclTabComponent.forEach((compo) => {
            if (compo.ref === $(this.scclTabBody).attr('id')) {
<<<<<<< HEAD
                this.componentViewResolver.componentViewResolver(this.scclTabBody, compo.component);
=======
                this.scclLayoutService.resolveComponentView(this.scclTabBody, compo.component);
                this.scclLayoutService.activateScrollbar(this.scclTabBody);
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
            }
        });
    }
}

