import { Directive, AfterViewInit, Input } from '@angular/core';
import { IScclDropDownProperties } from '../../../../scclModels/scclComponents/scclDropDownMenu/tags';
declare var $: any;

@Directive({
    selector: '[dropDownMenu], [dropDownTrigger], [dropDownProperties]'
})
export class ScclDropDownMenuDirective implements AfterViewInit {

    @Input('dropDownTrigger')
    dropDownTrigger
    @Input('dropDownProperties')
    dropDownProperties: IScclDropDownProperties


    constructor() {
    }
    
    ngAfterViewInit(): void {
        if (this.dropDownTrigger !== undefined && this.dropDownTrigger !== null) {
            $('.' + this.dropDownTrigger.class).dropdown(this.dropDownProperties);
        }
    }
}