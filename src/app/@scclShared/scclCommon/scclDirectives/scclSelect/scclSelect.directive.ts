import { 
    Directive,HostBinding,
    ComponentFactoryResolver,
    Injector, ApplicationRef,
    HostListener,Input,AfterViewInit } from '@angular/core';

declare var $: any;

    
@Directive({
  selector: '[sccl-select]',
})
export class ScclSelectDirective implements AfterViewInit {
    @Input()
    select
    
    ngAfterViewInit(): void {
        console.log(this.select)
    }
    @HostListener('click', ['$event'])
    getComponent(event: MouseEvent) {
      console.log(this.select)
    }
}
