import { Component, Input, AfterViewInit} from '@angular/core';
import {
    IScclTab,
} from '../../../../scclModels';
import { ScclGlobalService } from '../../scclServices';
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
    winHeight: number;

    constructor(private scclTabService: ScclTabService,
                private scclGlobalService: ScclGlobalService) {

    }

    ngAfterViewInit() {
        setTimeout(() => {
            $('ul.tabs').tabs();
        }, 200);

      this.scclGlobalService.subscribe('window.current-height', (windowHeight) => {
            this.winHeight = windowHeight.height;
        });
    }
}
