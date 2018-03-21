import { Component } from '@angular/core';
import { ScclGlobalService } from "../../../scclCommon/scclServices";
import { ScclThemesService } from "./scclThemes.service";

@Component({
    selector: 'sccl-themes',
    templateUrl: './scclThemes.html',
    styleUrls: ['./scclThemes.scss']
})
export class ScclThemesComponent {
    selectConfigs;
    
    constructor(private themeService: ScclThemesService,
            private scclGlobalService: ScclGlobalService) {
        this.selectConfigs = this.themeService.getThemesOptions()
    }
    setTheme(selectedTheme, name) {
        if(name === 'select-theme') {
            this.scclGlobalService.notifyDataChanged('selected.theme', selectedTheme.val())
        }
    }
    
}