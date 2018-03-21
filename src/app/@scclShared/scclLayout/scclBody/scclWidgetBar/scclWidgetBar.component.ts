import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { IScclTab } from '../../../../scclModels';
import { ScclGlobalService } from '../../../scclCommon/scclServices/index';


@Component({
    selector: 'sccl-widget-bar',
    templateUrl: './scclWidgetBar.html',
    styleUrls: ['scclWidgetBar.scss']
})
export class ScclWidgetBarComponent {
    height;
    isSticky;
    wiconTab: IScclTab;

    @Input()
    isLoggedIn = false;

    constructor(private scclGlobalService: ScclGlobalService,
                private cdRef: ChangeDetectorRef) {
        this.scclGlobalService.subscribe('isSticky', (isSticky) => {
            this.isSticky = isSticky;
        });

        this.scclGlobalService.subscribe('setHeight', (res) => {
            this.height = res.height;
            this.cdRef.detectChanges();
        });

        this.scclGlobalService.subscribe('wicon-tab', (tab) => {
            this.wiconTab = tab;
        });
    }
}
