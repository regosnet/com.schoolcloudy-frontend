import { Component,
        AfterViewInit,
        ChangeDetectorRef,
        OnInit
} from '@angular/core';
import {
    SCCL_HOME_CONFIG
} from './scclHome.configuration';

import {
    ScclLoginComponent
} from '../@scclShared/scclPanels/scclLogin/scclLogin.component';

import {
    IScclTab
} from '../scclModels';

import {
    TranslateService, TranslatePipe
} from '@ngx-translate/core';
import { ScclHomeService } from './scclHome.service';
import { ScclLayoutService } from '../@scclShared/scclLayout/scclLayout.service';
import { ScclTabService } from '../@scclShared/scclCommon/scclComponents/scclTab/scclTab.service';
import { ScclGlobalService } from '../@scclShared/scclCommon/scclServices';
declare var $: any;

@Component({
    selector: 'sccl-home',
    templateUrl: './scclHome.html'
})
export class ScclHomeComponent implements AfterViewInit, OnInit {

    height: number;
    homeTab: IScclTab;
    isSticky: boolean;

    constructor(private scclGlobalService: ScclGlobalService,
            private cdRef: ChangeDetectorRef,
            private homeService: ScclHomeService,
            private translate: TranslateService) {
        this.scclGlobalService.subscribe('home-main-tab', (tab) => {
            this.homeTab = tab;
        });
    }

    ngOnInit(): void {
        this.scclGlobalService.notifyDataChanged('module.configuration', SCCL_HOME_CONFIG);
    }

    ngAfterViewInit(): void {
        this.scclGlobalService.subscribe('isSticky', (isSticky) => {
            this.isSticky = isSticky;
        });
         this.cdRef.detectChanges();
    }
}
