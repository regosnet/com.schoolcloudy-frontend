import { Directive, HostListener, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';

declare var $: any;

@Directive({
    selector: '[scclCollapsibleDirective]'
})
export class ScclCollapsibleDirective implements AfterViewInit{
   
    
    @Input("scclCollapsibleDirective")
    containerId
    
    @ViewChild("scclCollapsibleDirective") container;
    constructor(private el: ElementRef) {
       
    }

    @HostListener('click')
    setPanelHeight() {
        console.log(this.container)
    }
    
    ngAfterViewInit(): void {
        
    }
}
