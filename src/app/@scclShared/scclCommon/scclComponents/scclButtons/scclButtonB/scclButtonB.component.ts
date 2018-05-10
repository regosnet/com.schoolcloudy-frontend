import { Component, Input, Output, EventEmitter, AfterViewInit, OnChanges } from '@angular/core';
import { IScclButton } from '../../../../../scclModels/scclComponents';
declare var $: any;

@Component({
    selector: 'sccl-button-b',
    templateUrl: './scclButtonB.html',
    styleUrls: ['./scclButtonB.scss']
})
export class ScclButtonBComponent implements AfterViewInit, OnChanges {

    @Input()
    scclBtns: IScclButton;

    @Output()
    btnActions = new EventEmitter();

    emitBtnActions(el) {
        this.btnActions.emit({element: el, button: this.scclBtns});
    }

    ngAfterViewInit(): void {
    }
    ngOnChanges(): void {
    }
}
