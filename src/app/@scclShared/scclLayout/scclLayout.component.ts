import { Component, HostListener, OnInit, Input, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { ScclLayoutService } from './scclLayout.service';
import { ScclGlobalService } from '../scclCommon/scclServices';
import { scclContants } from '../scclCommon/scclContants/sccl.constants';

@Component({
    selector: 'sccl-layout',
    templateUrl: './scclLayout.html',
    styleUrls: ['./scclLayout.scss']
})
export class ScclLayoutComponent implements AfterViewInit, OnInit {
    height;
    resizeWidth: boolean;
    scclTheme = 'sccl-default-theme';
    constructor(private scclGlobalService: ScclGlobalService,
                private scclLayoutService: ScclLayoutService,
                private cdRef: ChangeDetectorRef) {
    }
    ngOnInit(): void {

    }

    ngAfterViewInit() {
        this.scclGlobalService.subscribe('selected.theme', (theme) => {
           this.scclTheme = this.switchTheme(theme);
        });
        this.scclGlobalService.subscribe('heightConfigs', (heightConfig) => {
            this.height = heightConfig.find((x => x['layout'])).layout.height;
            this.cdRef.detectChanges();
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
}
