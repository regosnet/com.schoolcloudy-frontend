import { Component } from '@angular/core';
import { ScclThemesService } from './scclThemes.service';
import { ScclGlobalService } from '../../../../scclCommon/scclServices';

@Component({
    selector: 'sccl-themes',
    templateUrl: './scclThemes.html',
    styleUrls: ['./scclThemes.scss'],
    providers: [ScclThemesService]
})
export class ScclThemesComponent {
    selectConfigs;

    constructor(private themeService: ScclThemesService,
            private scclGlobalService: ScclGlobalService) {
        this.selectConfigs = this.themeService.getThemesOptions();
    }
    setTheme(selectedTheme, name) {
        if (name === 'select-theme') {
            this.scclGlobalService.notifyDataChanged('selected.theme', selectedTheme.val());
        }
    }
}
