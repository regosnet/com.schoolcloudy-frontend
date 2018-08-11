import { Injectable, AfterViewInit, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { TranslateService } from '@ngx-translate/core';
import { ScclGlobalService } from '../../scclCommon/scclServices';
<<<<<<< HEAD
=======
import { ScclViewResolverService } from './viewResolver.service';
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
import { IScclLayout, IScclBody, IScclHeader } from '../../../scclModels/scclLayout';

@Injectable()
export class ScclLayoutService {
    private isSlideIn = false;
    private isPanelCollapsed = false;

<<<<<<< HEAD
    constructor(private scclGlobalService: ScclGlobalService,
                private translate: TranslateService,
                private detectDevice: DeviceDetectorService) {
        this.setUserLanguage();
=======
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
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
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
<<<<<<< HEAD
=======

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
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
}
