import {
    Directive,
    Input,
    AfterViewInit
} from '@angular/core';
import {
    ScclComponentViewResolverService
} from '../../../scclCommon/scclServices/scclComponentViewResolver';


@Directive({
  selector: '[scclSidebar], [scclSidebarComponent]'
})
export class ScclSidebarDirective implements AfterViewInit {

    @Input('scclSidebarComponent')
    scclSidebarComponent: Array<any>;

    @Input('scclSidebar')
    scclSidebar: HTMLDivElement;

    constructor(
        private componentViewResolver: ScclComponentViewResolverService
    ) {

    }

    ngAfterViewInit(): void {
        this.componentViewResolver.componentViewResolver(this.scclSidebar, this.scclSidebarComponent);
    }
}
