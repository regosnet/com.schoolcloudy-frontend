import {
    Directive,
    Input,
    AfterViewInit
} from '@angular/core';
<<<<<<< HEAD
import {
    ScclComponentViewResolverService
} from '../../../scclCommon/scclServices/scclComponentViewResolver';


@Directive({
  selector: '[scclSidebar], [scclSidebarComponent]'
=======
import { ScclLayoutService } from '../../scclLayoutServices';
declare var $: any;


@Directive({
  selector: '[scclSidebar], [scclSidebarComponent]',
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
})
export class ScclSidebarDirective implements AfterViewInit {

    @Input('scclSidebarComponent')
    scclSidebarComponent: Array<any>;

    @Input('scclSidebar')
    scclSidebar: HTMLDivElement;

<<<<<<< HEAD
    constructor(
        private componentViewResolver: ScclComponentViewResolverService
    ) {
=======
    constructor(private scclLayoutService: ScclLayoutService) {
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904

    }

    ngAfterViewInit(): void {
<<<<<<< HEAD
        this.componentViewResolver.componentViewResolver(this.scclSidebar, this.scclSidebarComponent);
=======
        this.scclLayoutService.resolveComponentView(this.scclSidebar, this.scclSidebarComponent);
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
    }
}
