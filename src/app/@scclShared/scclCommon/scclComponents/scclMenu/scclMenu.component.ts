import { Component,
    Input,
    OnChanges
} from '@angular/core';
declare var $: any;

@Component({
    selector: 'sccl-menu',
    templateUrl: './scclMenu.html',
    styleUrls: ['./scclMenu.scss']
})
export class ScclMenuComponent implements OnChanges {
    @Input()
    items;
    @Input()
    height;

    ngOnChanges(): void {
        setTimeout(() => {
            $('.collapsible').collapsible();
        }, 500);
    }
}
