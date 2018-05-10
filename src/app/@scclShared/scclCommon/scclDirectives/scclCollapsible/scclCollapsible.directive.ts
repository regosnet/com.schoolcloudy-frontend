import { AfterViewInit,
    ComponentFactoryResolver,
    Injector, ApplicationRef,
    Input, Directive } from '@angular/core';
import { ScclLayoutService } from '../../../scclLayout/scclLayoutServices';
declare var $: any;

@Directive({
    selector: '[scclCollapsible]',
})
export class ScclCollapsibleDirective implements AfterViewInit {

    @Input('scclCollapsible')
    scclCollapsible: HTMLAllCollection;

    constructor(private scclLayoutService: ScclLayoutService) {
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            $('.collapsible').collapsible();
        }, 250);
    this.scclLayoutService.activateScrollbar(this.scclCollapsible);
    }
}
