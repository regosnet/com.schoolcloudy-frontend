import { Component, HostListener, OnInit, Input, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { ScclGlobalService } from '../scclCommon/scclServices';
import { scclContants } from '../scclCommon/scclContants/sccl.constants';
import { ScclLayoutService } from './scclLayoutServices/scclLayout.service';
import { IScclBody, IScclHeader, IScclLayout } from '../../scclModels';
import { IScclButton } from '../../scclModels/scclComponents';

@Component({
    selector: 'sccl-layout',
    templateUrl: './scclLayout.html',
    styleUrls: ['./scclLayout.scss']
})
export class ScclLayoutComponent implements AfterViewInit, OnInit {
    height: number;
    resizeWidth: boolean;
    isTechnicalPanelSlideIn: boolean;
    bodyConfig: IScclBody;
    headConfig: IScclHeader;
    scclTheme = 'sccl-default-theme';
    slideOutBtn: IScclButton;

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
            this.isTechnicalPanelSlideIn = position.isSlideIn;
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
            this.headConfig = configs.headerConfig;
            this.bodyConfig = configs.bodyConfig;
        });
    }

    closePanel() {}
}
