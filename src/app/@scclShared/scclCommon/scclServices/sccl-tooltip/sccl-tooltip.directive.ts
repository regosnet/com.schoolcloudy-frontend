import { Directive, AfterViewInit, Input } from "@angular/core";
declare var $: any;


@Directive({
  selector: '[scclToolTip]',
})
export class ScclToolTipDirective implements AfterViewInit {

    @Input('scclToolTip')
    scclToolTip: any;

    ngAfterViewInit(): void {
        if (this.scclToolTip !== null && this.scclToolTip !== undefined) {
            $('.' + this.scclToolTip.class).tooltip(this.scclToolTip.tool_tip);
        }
    }
}