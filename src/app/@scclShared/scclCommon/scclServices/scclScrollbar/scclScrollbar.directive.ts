import { Directive, AfterViewInit, Input } from "@angular/core";
import { ScclScrollbarSerivce } from "./scclScrollbar.service";
declare var $: any;


@Directive({
  selector: '[scclScrollbar]',
})
export class ScclScrollbarDirective implements AfterViewInit {

    @Input('scclScrollbar')
    scclScrollbar: any;

    constructor(private scrollbarService: ScclScrollbarSerivce) {

    }

    ngAfterViewInit(): void {
       this.scrollbarService.initializePanelScrollbar(this.scclScrollbar);
    }
}