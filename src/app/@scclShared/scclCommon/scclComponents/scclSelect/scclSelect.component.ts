import {
    Component,
    AfterViewInit,
    OnDestroy,
    Input, Output, EventEmitter
} from '@angular/core';
import { scclContants } from '../../scclContants/sccl.constants';
declare var $: any;

@Component({
    selector: 'sccl-select',
    templateUrl: './scclSelect.html',
    styleUrls: ['./scclSelect.scss']
})
export class ScclSelectComponent implements AfterViewInit, OnDestroy {

    @Input() selectConfigs;
    @Output() selected = new EventEmitter();
    url = scclContants.srcUrl.cflags;

    constructor() {

    }

    ngAfterViewInit(): void {
        $('select').material_select();
        $('select').change((e) => {
            this.selected.emit($(e.currentTarget));
       });
    }

    ngOnDestroy(): void {
        $('select').material_select('destroy');
    }
}
