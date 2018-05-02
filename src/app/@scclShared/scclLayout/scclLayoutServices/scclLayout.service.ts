import { Injectable, AfterViewInit, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { TranslateService } from '@ngx-translate/core';
import { ScclGlobalService } from '../../scclCommon/scclServices';
import { ScclViewResolverService } from './viewResolver.service';
import { IScclLayout, IScclBody, IScclHeader } from '../../../scclModels/scclLayout';

@Injectable()
export class ScclLayoutService {
    private isSlideIn = false;
    private isPanelCollapsed = false;

    constructor(private scclViewResolverService: ScclViewResolverService,
                private scclGlobalService: ScclGlobalService,
                private translate: TranslateService,
                private detectDevice: DeviceDetectorService) {
        this.setUserLanguage();
        this.notifyScreenDimensionChanged();
    }

    notifyScreenDimensionChanged() {
        this.scclGlobalService.notifyDataChanged('screen-dimension', {height: window.innerHeight, width: window.innerWidth});
    }

    panelSlideToggle() {
        this.isSlideIn = !this.isSlideIn;
        this.scclGlobalService.notifyDataChanged('isSlideIn', {isSlideIn: this.isSlideIn});
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

    public resolveComponentView(element, component) {
        this.scclViewResolverService.componentViewResolver(element, component);
    }

    public activateScrollbar(element) {
        this.scclViewResolverService.initScrollbar(element);
    }
    public collapseSidePanel() {
        this.isPanelCollapsed = !this.isPanelCollapsed;
        this.scclGlobalService.notifyDataChanged('collapse-panel', this.isPanelCollapsed);
    }
}
