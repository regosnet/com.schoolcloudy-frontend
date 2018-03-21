import { Component, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { ScclGlobalService } from "../../../scclCommon/scclServices";
import { TranslateService } from "@ngx-translate/core";
import { scclContants } from "../../../scclCommon/scclContants/sccl.constants";
import { ScclLanguageService } from "./scclLanguage.service";

@Component({
    selector: 'sccl-language',
    templateUrl: './scclLanguage.html',
    styleUrls: ['./scclLanguage.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScclLanguageComponent implements AfterViewInit{ 
    languageSelect
    
    constructor(private languageService: ScclLanguageService) {
        console.log(this.languageService.getUserCurrentLanguage()) 
        this.languageService.setLanguageOptions(this.languageService.getUserCurrentLanguage())
        this.languageSelect = this.languageService.getLanguageOptions();
    }
    setLanguage(selectedLanguage, name) {
        if(name === 'select-language') {
            this.languageService.notifyLanguageChange(selectedLanguage.val())
        }
    }
    
    ngAfterViewInit():void {
        
    }
}