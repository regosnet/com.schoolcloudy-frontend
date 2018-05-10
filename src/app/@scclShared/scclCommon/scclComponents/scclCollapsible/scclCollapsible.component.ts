import { Component,
    AfterViewInit,
    Input,
    OnChanges
} from '@angular/core';
declare var $: any;

@Component({
    selector: 'sccl-collapsible',
    templateUrl: './scclCollapsible.html',
    styleUrls: ['./scclCollapsible.scss']
})
export class ScclCollapsibleComponent implements AfterViewInit, OnChanges{
    @Input()
    items
    @Input()
    height;

    ngAfterViewInit(): void {
        
    }
    ngOnChanges(): void {
        setTimeout(() => {
            $('.collapsible').collapsible();
        }, 500);
    }
}
