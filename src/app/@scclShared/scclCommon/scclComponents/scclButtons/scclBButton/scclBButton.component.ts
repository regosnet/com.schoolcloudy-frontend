import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sccl-B-button',
    templateUrl: './scclBButton.html',
    styleUrls: ['./scclBButton.scss']
})
export class ScclBButtonComponent {

    @Input()
    scclBtns;

    @Output()
    btnActions = new EventEmitter();

    emitBtnActions(el) {
        this.btnActions.emit(el);
    }
}