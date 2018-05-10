import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScclGlobalService } from '../../../../scclCommon/scclServices';

@Injectable()
export class ScclLanguageService {
    savedLanguage = 'usr_lang';
    languages = [
                 {title: 'English', icon: 'gb', value: 'en'},
                 {title: 'Latviešu', icon: 'lv', value: 'lv'},
                 {title: 'Deutsch', icon: 'fr', value: 'fr'},
                 {title: 'French', icon: 'de', 'value': 'de'},
                 {title: 'Arabic',  icon: 'eg', value: 'ar'}
             ];
    _opts = [];
    constructor(private scclGlobalService: ScclGlobalService) {
    }

    getLanguageOptions() {
        const options = this._opts;
        return {
            options,
            label: {
                title: 'sccl.settings.language.select.label.title'
            }
        };
    }

    getUserCurrentLanguage(): string {
        let currentLanguage = '';
        if (localStorage.getItem(this.savedLanguage) === null) {
            currentLanguage = 'en';
        }else {
            currentLanguage = localStorage.getItem('usr_lang');
        }
        this.notifyLanguageChange(currentLanguage);
        return currentLanguage;
    }

    setLanguageOptions(language) {
        localStorage.setItem(this.savedLanguage, language);
        const sortedLang = [];
        const lang = this.languages.find(x => x.value === language);
        if (lang !== undefined) {
            sortedLang.push(lang);
            this.languages.filter(x => x.value !== language)
            .forEach((langOpts) => {
                sortedLang.push(langOpts);
            });
            this._opts = sortedLang;
        }else {
            this._opts = this.languages;
        }
    }

    notifyLanguageChange(selectedLanguage) {
        this.setLanguageOptions(selectedLanguage);
        this.scclGlobalService.notifyDataChanged('selected.language', selectedLanguage);
    }
}
