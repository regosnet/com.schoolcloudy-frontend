import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService} from '@ngx-translate/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { scclContants } from '../../../../../scclCommon/scclContants/sccl.constants';


export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, scclContants.srcUrl.langs, '.json');
}

const translationOptions = {
  loader: {
    provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [HttpClient]
  }
};

@NgModule({
  imports: [HttpClientModule, TranslateModule.forRoot(translationOptions)],
  exports: [TranslateModule],
  providers: [TranslateService]
})
export class ScclTranslationModule {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'lv', 'fr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|lv|fr/) ? browserLang : 'en');
  }
}
