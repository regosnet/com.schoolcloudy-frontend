import {
    Directive,
    Input,
    AfterViewInit
} from '@angular/core';
import { ScclLayoutService } from '../../scclLayoutServices';
declare var $: any;


@Directive({
  selector: '[scclSidebar], [scclSidebarComponent]',
})
export class ScclSidebarDirective implements AfterViewInit {

    @Input('scclSidebarComponent')
    scclSidebarComponent: Array<any>;

    @Input('scclSidebar')
    scclSidebar: HTMLDivElement;

    constructor(private scclLayoutService: ScclLayoutService) {

    }

    ngAfterViewInit(): void {
        this.scclLayoutService.resolveComponentView(this.scclSidebar, this.scclSidebarComponent);
    }
}
