import { Directive, AfterViewInit, Input } from '@angular/core';
declare var $: any;

@Directive({
    selector: '[dropDownMenu]'
})
export class ScclDropDownMenuDirective implements AfterViewInit {

    @Input('dropDownMenu')
    dropDownMenu
    
    ngAfterViewInit(): void {
        $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            gutter: 0, // Spacing from edge
            belowOrigin: false, // Displays dropdown below the button
            alignment: 'left', // Displays dropdown with edge aligned to the left of button
          }
        );
    }
}