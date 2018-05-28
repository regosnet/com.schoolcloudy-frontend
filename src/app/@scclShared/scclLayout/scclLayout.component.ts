import { Component, HostListener, OnInit, Input, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { ScclGlobalService } from '../scclCommon/scclServices';
import { scclContants } from '../scclCommon/scclContants/sccl.constants';
import { ScclLayoutService } from './scclLayoutServices/scclLayout.service';
import { IScclBody, IScclHeader, IScclLayout } from '../../scclModels';
import { IScclButton } from '../../scclModels/scclComponents';
import { IScclTechnicalPanel } from '../../scclModels/scclLayout/scclTechnicalPanel';
declare var $:any;

@Component({
    selector: 'sccl-layout',
    templateUrl: './scclLayout.html',
    styleUrls: ['./scclLayout.scss'],
})
export class ScclLayoutComponent implements IScclLayout, AfterViewInit, OnInit {
    isLoggedIn: boolean;
    scclTheme: string;
    resizeWidth: boolean;
    height: number;
    headConfig: IScclHeader;
    bodyConfig: IScclBody;
    technicalPanel: IScclTechnicalPanel;
    footer;
    right = "-=250"

    constructor(private scclGlobalService: ScclGlobalService,
                private scclLayoutService: ScclLayoutService,
                private cdRef: ChangeDetectorRef) {
        this.initializeModuleConfigurations();
    }
    ngOnInit(): void {
        this.setLayoutHeight();
    }

    ngAfterViewInit() {
        this.scclGlobalService.subscribe('selected.theme', (theme) => {
           this.scclTheme = this.switchTheme(theme);
        });
        
        this.scclGlobalService.subscribe('isSlideIn', (position) => {
            
            this.right = this.right === "+=250" ? "-=250" : "+=250";
            $('.technical-panel').animate({
                right: this.right,
              }, {
                  step: function(now, fx) {
                  }
              });
        });
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
            this.scclTheme = configs.scclTheme;
            this.resizeWidth = configs.resizeWidth;
            this.headConfig = configs.headConfig;
            this.bodyConfig = configs.bodyConfig;
            this.technicalPanel = configs.technicalPanel;
            this.footer = configs.footer;
            this.isLoggedIn = configs.isLoggedIn;
        });
    }

    closePanel() {}

    footerbtnActions(event) {
        console.log(event)
    }
}
