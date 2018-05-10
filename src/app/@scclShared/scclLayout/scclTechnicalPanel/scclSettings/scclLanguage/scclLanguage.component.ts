import { Component, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { ScclLanguageService } from './scclLanguage.service';

@Component({
    selector: 'sccl-language',
    templateUrl: './scclLanguage.html',
    styleUrls: ['./scclLanguage.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ScclLanguageService]
})
export class ScclLanguageComponent implements AfterViewInit {
    languageSelect;

    constructor(private languageService: ScclLanguageService) {
        this.languageService.setLanguageOptions(this.languageService.getUserCurrentLanguage());
        this.languageSelect = this.languageService.getLanguageOptions();
    }
    setLanguage(selectedLanguage, name) {
        if (name === 'select-language') {
            this.languageService.notifyLanguageChange(selectedLanguage.val());
        }
    }

    ngAfterViewInit(): void {

    }
}
