import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { IScclBody, IScclTab} from '../../../scclModels';
import { ScclGlobalService } from '../../scclCommon/scclServices';
declare var $: any;

@Component({
    selector: 'sccl-body',
    templateUrl: './scclBody.html',
    styleUrls: ['./scclBody.scss']
})
export class ScclBodyComponent implements AfterViewInit {
    public height;
    public isLoggedIn;
    isRSHPanelOpen = false;
    tabs: IScclTab;

    constructor(
            private scclGlobalService: ScclGlobalService,
            private cdRef: ChangeDetectorRef) {
    }

    public ngAfterViewInit(): void {
        this.scclGlobalService.subscribe('isLoggedIn', (res) => {
            this.isLoggedIn = res.isLoggedIn;
            this.cdRef.detectChanges();
        });
        this.scclGlobalService.subscribe('heightConfigs', (heightConfig: any[]) => {
            this.height = heightConfig.find((x => x['body'])).body.height;
            this.cdRef.detectChanges();
        });
        this.scclGlobalService.subscribe('isRSHPanelOpen',
                (res) => {
                    this.isRSHPanelOpen = res.isRSHPanelOpen;
                    this.cdRef.detectChanges();
                });
    }

    getContentStyle() {
        if (this.isLoggedIn) {
            return {
                paddingTop: 0 + 'px'
            };
        }else {
            return {
                paddingTop: 25 + 'px',
                height: this.height + 'px'
            };
        }

    }
}
