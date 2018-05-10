import { Component, Input } from '@angular/core';

@Component({
   selector: 'sccl-dropdown-menu',
   templateUrl: './scclDropDownMenu.html',
   styleUrls: ['./scclDropDownMenu.scss']
})
export class ScclDropDownMenuComponent {

    @Input()
    public ddMenuConfig;

    @Input()
    itemsContainer;

    constructor() {
    }

}
