import { Component, OnInit, Input } from '@angular/core';
import { ScclGlobalService } from '../../../../scclCommon/scclServices/index';
declare var $: any;


@Component({
    selector: 'sccl-mid-head',
    templateUrl: './scclMidHead.html',
    styleUrls: ['./scclMidHead.scss']
})
export class ScclMidHeadComponent implements OnInit {

    listItems;
    username = 'eric.ihechukwudere';
    @Input()
    isLoggedIn: boolean;


    menuHeader = [];

    constructor(private scclGlobalService: ScclGlobalService) {
        this.scclGlobalService.subscribe('midHeadConfig', (midHeadConfigs) => {
            this.listItems = midHeadConfigs.menuDropdown;
        });
    }

    ngOnInit(): void {

    }

}
