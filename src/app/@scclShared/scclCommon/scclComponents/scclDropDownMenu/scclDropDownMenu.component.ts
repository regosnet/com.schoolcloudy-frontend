import { Component, Input, AfterViewInit } from '@angular/core';
declare var $: any

@Component({
   selector: 'sccl-dropdown-menu',
   templateUrl: './scclDropDownMenu.html',
   styleUrls: ['./scclDropDownMenu.scss']
})
export class ScclDropDownMenuComponent implements AfterViewInit {

    @Input()
    public listItems;

    @Input()
    public menuHeader = [];

    constructor() {
    }

    ngAfterViewInit(): void {
        $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrainWidth: false,
            hover: false,
            gutter: 0,
            belowOrigin: true,
            alignment: 'right',
            stopPropagation: false
          }
        );
    }
}