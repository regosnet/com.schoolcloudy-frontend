import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sccl-button-b',
    templateUrl: './scclButtonB.html',
    styleUrls: ['./scclButtonB.scss']
})
export class ScclButtonBComponent {

    @Input()
    scclBtns;

    @Output()
    btnActions = new EventEmitter();

    emitBtnActions(el) {
        this.btnActions.emit(el);
    }
}
