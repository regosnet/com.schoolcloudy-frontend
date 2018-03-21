import { Component, Input, AfterViewInit} from '@angular/core';
import {
    IScclTab,
} from '../../../../scclModels';
import { ScclTabService } from './scclTab.service';
declare var $: any;

@Component({
    selector: 'sccl-tab',
    templateUrl: './scclTab.html',
    styleUrls: ['./scclTab.scss'],
    providers: [ScclTabService]
})
export class ScclTabComponent implements AfterViewInit {
    @Input() tab: IScclTab;

    constructor(private scclTabService: ScclTabService) {

    }

    ngAfterViewInit() {
        setTimeout(() => {
            $('ul.tabs').tabs();
        }, 200);
    }
}
