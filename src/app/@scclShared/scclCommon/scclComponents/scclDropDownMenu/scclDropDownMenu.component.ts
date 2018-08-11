<<<<<<< HEAD
import { Component, Input } from '@angular/core';
=======
import { Component, Input, AfterViewInit, OnChanges } from '@angular/core';
declare var $: any;
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904

@Component({
   selector: 'sccl-dropdown-menu',
   templateUrl: './scclDropDownMenu.html',
   styleUrls: ['./scclDropDownMenu.scss']
})
<<<<<<< HEAD
export class ScclDropDownMenuComponent {

    @Input()
    ddMenuConfig;
    @Input()
    itemsContainer;
    constructor() {
    }

=======
export class ScclDropDownMenuComponent implements AfterViewInit, OnChanges {

    @Input()
    public ddMenuConfig;

    @Input()
    itemsContainer;

    constructor() {
    }

    ngAfterViewInit(): void {
       /* $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrainWidth: false,
            hover: false,
            gutter: 0,
            belowOrigin: true,
            alignment: 'right',
            stopPropagation: false
          }
        );*/
    }

    ngOnChanges(): void {
        $('.dropdown-button').dropdown({
            alignment: 'left',
        });
    }
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
}
