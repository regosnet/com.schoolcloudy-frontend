import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sccl-A-button',
    templateUrl: './scclAButton.html',
    styleUrls: ['./scclAButton.scss']
})
export class ScclAButtonComponent {

    @Input()
    scclBtns;

    @Output()
    btnActions = new EventEmitter();

    emitBtnActions(el) {
        this.btnActions.emit(el);
    }
}
