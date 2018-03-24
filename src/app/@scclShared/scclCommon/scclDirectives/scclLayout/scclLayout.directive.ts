import { Directive, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ScclLayoutService } from '../../../scclLayout/scclLayout.service';
import { ScclGlobalService } from '../../scclServices';

@Directive({
    selector: '[scclLayoutDirective]'
})
export class ScclLayoutDirective {


    constructor(private scclLayoutService: ScclLayoutService,
      private scclGlobalService: ScclGlobalService) {
    }

    @HostListener('window:resize')
    setHeightOnWindowResize() {
        this.scclLayoutService.setHeight();
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(event) {
        if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
            document.getElementById('navbar-onscroll').style.top = '0';
            this.scclGlobalService.notifyDataChanged('isSticky', true);
        }else {
            document.getElementById('navbar-onscroll').style.top = '-35px';
            this.scclGlobalService.notifyDataChanged('isSticky', false);
        }
    }
}
