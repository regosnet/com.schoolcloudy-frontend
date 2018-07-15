import { AfterViewInit, Input, Directive, HostListener, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare var $: any;


@Directive({
  selector: '[scclScreenDimensionResolver]',
})
export class ScclScreenDimensionResolverDirective implements AfterViewInit, OnChanges {

    @Input('scclScreenDimensionResolver')
    scclScreenDimensionResolver: HTMLDivElement;

    constructor(
        private _router: Router) {
    }

    ngAfterViewInit(): void {
        console.log(this.scclScreenDimensionResolver);
    }

    /* Prevents Login form from mutliple display when window is resized */
   @HostListener('window:resize')
   switchLoginView(path: string) {
       if (window.innerWidth > 1200) {
           if (this._router.url === '/login') {
               this._router.navigate(['']);
           }
       }
   }

   checkInitUrlNaviagtion() {
    this._router.events
    .filter((event) => event instanceof NavigationEnd)
    .subscribe((event: NavigationEnd) => {
        this.switchLoginView(event.url);
      });
   }

   ngOnChanges(): void {
       console.log(this.scclScreenDimensionResolver);
   }
}
