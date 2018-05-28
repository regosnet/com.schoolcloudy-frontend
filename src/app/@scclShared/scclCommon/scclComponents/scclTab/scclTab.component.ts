import { Component, Input, OnChanges, ChangeDetectionStrategy, OnDestroy, AfterViewInit} from '@angular/core';
declare var $: any;

@Component({
    selector: 'sccl-tab',
    templateUrl: './scclTab.html',
    styleUrls: ['./scclTab.scss']
})
export class ScclTabComponent implements OnChanges, AfterViewInit{
    @Input() tab;

    @Input()
    height

    constructor() {
        
    }
    ngAfterViewInit(): void {
        setTimeout(() => {
            $('ul.tabs').tabs();
        }, 50);
    }

    ngOnChanges(): void {
       
    }

}
