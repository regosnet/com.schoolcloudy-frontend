import { Component, Input, OnChanges, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
declare var $: any;

@Component({
    selector: 'sccl-tab',
    templateUrl: './scclTab.html',
    styleUrls: ['./scclTab.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScclTabComponent {
    @Input() tab;

    @Input()
    height

    constructor() {
    }

}
