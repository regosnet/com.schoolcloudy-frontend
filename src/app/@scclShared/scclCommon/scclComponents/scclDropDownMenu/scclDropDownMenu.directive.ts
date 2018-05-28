import { Directive, AfterViewInit, Input } from '@angular/core';
import { IScclDropDownProperties } from '../../../../scclModels/scclComponents/scclDropDownMenu/tags';
import { ScclScrollbarAdapterSerivce } from '../../scclServices';
declare var $: any;

@Directive({
    selector: '[dropDownMenu], [dropDownTrigger], [dropDownProperties]'
})
export class ScclDropDownMenuDirective implements AfterViewInit {

    @Input('dropDownTrigger')
    dropDownTrigger
    @Input('dropDownProperties')
    dropDownProperties: IScclDropDownProperties
    @Input('dropDownMenu')
    dropDownMenu

    constructor(private scrollbarAdapter: ScclScrollbarAdapterSerivce ) {
    }
    
    ngAfterViewInit(): void {
        if (this.dropDownTrigger !== undefined && this.dropDownTrigger !== null) {
            $('.' + this.dropDownTrigger.class).dropdown(this.dropDownProperties);
        }
        if (this.dropDownMenu !== undefined) {
            this.scrollbarAdapter.initializePanelScrollbar(this.dropDownMenu);
        }
    }
}