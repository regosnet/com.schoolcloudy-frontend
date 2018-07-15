import { AfterViewInit, Input, Directive } from '@angular/core';
import { ScclLayoutService } from '../../../scclLayout/scclLayoutServices';
import { ScclComponentViewResolverService } from '../../scclServices/scclComponentViewResolver';
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
        private componentViewResolver: ScclComponentViewResolverService) {
       }

    ngAfterViewInit(): void {
        this.scclTabComponent.forEach((compo) => {
            if (compo.ref === $(this.scclTabBody).attr('id')) {
                this.componentViewResolver.componentViewResolver(this.scclTabBody, compo.component);
            }
        });
    }
}

