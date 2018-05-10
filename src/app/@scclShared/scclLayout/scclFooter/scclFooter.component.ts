import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IScclFooter } from './scclFooter.model';

@Component({
    selector: 'sccl-footer',
    templateUrl: './scclFooter.html',
    styleUrls: ['./scclFooter.scss']
})
export class ScclFooterComponent {
    @Input()
    footerConfig: IScclFooter;

    @Output()
    footerBtnActions = new EventEmitter();

    btnActions(el) {
        this.footerBtnActions.emit(el);
    }
}