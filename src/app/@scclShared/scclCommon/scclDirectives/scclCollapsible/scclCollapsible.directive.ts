import { AfterViewInit,
    ComponentFactoryResolver,
    Injector, ApplicationRef,
    Input, Directive } from '@angular/core';
import { ScclLayoutService } from '../../../scclLayout/scclLayoutServices';
import { ScclScrollbarAdapterSerivce } from '../../scclServices';
declare var $: any;

@Directive({
    selector: '[scclCollapsible]',
})
export class ScclCollapsibleDirective implements AfterViewInit {

    @Input('scclCollapsible')
    scclCollapsible: HTMLAllCollection;

    constructor(
        private scclLayoutService: ScclLayoutService,
        private scclScrollbarAdapter: ScclScrollbarAdapterSerivce) {
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            $('.collapsible').collapsible();
        }, 350);
        this.scclScrollbarAdapter.initializePanelScrollbar(this.scclCollapsible);
    }
}
