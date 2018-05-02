import { Directive, HostListener, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';

declare var $: any;

@Directive({
    selector: '[scclCollapsibleDirective]'
})
export class ScclCollapsibleDirective implements AfterViewInit {

    ngAfterViewInit(): void {

    }
}
