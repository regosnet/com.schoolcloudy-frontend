import { Component, Input, Output, EventEmitter, AfterViewInit, OnChanges } from '@angular/core';
import { IScclButton } from '../../../../../scclModels/scclComponents';
import { ScclButton } from '../scclButton';
declare var $: any;

@Component({
    selector: 'sccl-button-b',
    templateUrl: './scclButtonB.html',
    styleUrls: ['./scclButtonB.scss']
})
export class ScclButtonBComponent extends ScclButton {

    
}
