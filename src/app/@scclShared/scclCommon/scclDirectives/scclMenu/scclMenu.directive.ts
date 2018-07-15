import { AfterViewInit,
    ComponentFactoryResolver,
    Injector, ApplicationRef,
    Input, Directive } from '@angular/core';
import { ScclLayoutService } from '../../../scclLayout/scclLayoutServices';
declare var $: any;

@Directive({
    selector: '[scclMenu]',
})
export class ScclMenuDirective implements AfterViewInit {

    @Input('scclMenu')
    scclMenu: HTMLAllCollection;

    constructor() {
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            $('.collapsible').collapsible();
        }, 350);
    }
}
