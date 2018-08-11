import { Component, HostListener, OnInit, Input, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { ScclGlobalService } from '../scclCommon/scclServices';
import { scclContants } from '../scclCommon/scclContants/sccl.constants';
import { ScclLayoutService } from './scclLayoutServices/scclLayout.service';
import { IScclBody, IScclHeader, IScclLayout } from '../../scclModels';
import { IScclButton } from '../../scclModels/scclComponents';
<<<<<<< HEAD
import { IScclTechnicalPanel } from '../../scclModels/scclLayout/scclTechnicalPanel';
declare var $:any;
=======
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904

@Component({
    selector: 'sccl-layout',
    templateUrl: './scclLayout.html',
    styleUrls: ['./scclLayout.scss'],
})
<<<<<<< HEAD
export class ScclLayoutComponent implements IScclLayout, AfterViewInit, OnInit {
    isLoggedIn: boolean;
    scclTheme: string;
    resizeWidth: boolean;
    height: number;
    headConfig: IScclHeader;
    bodyConfig: IScclBody;
    technicalPanel: IScclTechnicalPanel;
    footer;
=======
export class ScclLayoutComponent implements AfterViewInit, OnInit {
    height: number;
    resizeWidth: boolean;
    isTechnicalPanelSlideIn: boolean;
    bodyConfig: IScclBody;
    headConfig: IScclHeader;
    scclTheme = 'sccl-default-theme';
    slideOutBtn: IScclButton;
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904

    constructor(private scclGlobalService: ScclGlobalService,
                private scclLayoutService: ScclLayoutService,
                private cdRef: ChangeDetectorRef) {
        this.initializeModuleConfigurations();
    }
    ngOnInit(): void {
<<<<<<< HEAD
        this.setHeightOnWindowResize();
=======
        this.setLayoutHeight();
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
    }

    ngAfterViewInit() {
        this.scclGlobalService.subscribe('selected.theme', (theme) => {
           this.scclTheme = this.switchTheme(theme);
        });
<<<<<<< HEAD
        this.scclGlobalService.subscribe('isLoggedIn', (isLoggedIn) => {
            this.isLoggedIn = isLoggedIn;
            this.cdRef.detectChanges();
         });
=======

        this.scclGlobalService.subscribe('isSlideIn', (position) => {
            this.isTechnicalPanelSlideIn = position.isSlideIn;
        });
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
    }

    switchTheme(theme) {
        switch (theme) {
        case 'dark':
            this.scclTheme = 'sccl-default-theme';
                break;
        case 'light':
            this.scclTheme = 'sccl-regomic-theme';
                break;
        default:
            break;
        }
        return this.scclTheme;
    }

<<<<<<< HEAD

    initializeModuleConfigurations() {
        this.scclGlobalService.subscribe('module.configurations', (configs: IScclLayout) => {
            this.scclTheme = configs.scclTheme;
            this.resizeWidth = configs.resizeWidth;
            this.headConfig = configs.headConfig;
            this.bodyConfig = configs.bodyConfig;
            this.technicalPanel = configs.technicalPanel;
            this.footer = configs.footer;
            this.isLoggedIn = configs.isLoggedIn;
        });
    }

    @HostListener('window:resize')
    setHeightOnWindowResize() {
        this.height = window.innerHeight;
        
    }

    footerbtnActions(evnt) {
        console.log(evnt);
    }
    
=======
    setLayoutHeight() {
        this.scclGlobalService.subscribe('screen-dimension', (dimension) => {
            this.height = dimension.height;
            this.cdRef.detectChanges();
        });
    }

    togglePanel() {
        this.scclLayoutService.panelSlideToggle();
    }

    initializeModuleConfigurations() {
        this.scclGlobalService.subscribe('module.configurations', (configs: IScclLayout) => {
            this.headConfig = configs.headerConfig;
            this.bodyConfig = configs.bodyConfig;
        });
    }

    closePanel() {}
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
}
