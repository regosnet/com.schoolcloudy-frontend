import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ScclGlobalService } from '../../../scclCommon/scclServices';
import { Router } from '@angular/router';
import { scclContants } from '../../../scclCommon/scclContants/sccl.constants';

@Component({
    selector: 'sccl-content-section',
    templateUrl: './scclContentSection.html',
    styleUrls: ['./scclContentSection.scss']
})
export class ScclContentSectionComponent implements AfterViewInit {
    isSticky: boolean;
    height: number;
    overflowY = 'hidden';
    constructor(private scclGlobalService: ScclGlobalService,
                private cdRef: ChangeDetectorRef,
                private _router: Router) {
        this.scclGlobalService.subscribe('isSticky', (isSticky) => {
            if (this._router.url !== '/#!') {
                this.isSticky = isSticky;
                this.overflowY = 'visible';
            }
        });

        this.scclGlobalService.subscribe('heightConfigs', (heightConfig) => {
            this.height = heightConfig.find((x => x['content'])).content.height;
            this.cdRef.detectChanges();
        });
    }
    ngAfterViewInit() {

    }
}
