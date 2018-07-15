import { Injectable, AfterViewInit, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { TranslateService } from '@ngx-translate/core';
import { ScclGlobalService } from '../../scclCommon/scclServices';
import { IScclLayout, IScclBody, IScclHeader } from '../../../scclModels/scclLayout';

@Injectable()
export class ScclLayoutService {
    private isSlideIn = false;
    private isPanelCollapsed = false;

    constructor(private scclGlobalService: ScclGlobalService,
                private translate: TranslateService,
                private detectDevice: DeviceDetectorService) {
        this.setUserLanguage();
    }

    detectUserDevice() {
        /*console.log(this.detectDevice.getDeviceInfo())*/
    }

    setUserLanguage() {
        this.scclGlobalService.subscribe('selected.language', (language) => {
            this.translate.use(language);
        });
    }

    setPageTitle(pageTitle: string): void {
        setTimeout(() => {
            this.scclGlobalService.notifyDataChanged('active-page.title', pageTitle);
        }, 1);
    }
}
