import { Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IScclTab, IScclHome } from '../scclModels';
import { ScclTabService } from '../@scclShared/scclCommon/scclComponents/scclTab/scclTab.service';
import { ScclGlobalService } from '../@scclShared/scclCommon/scclServices';
import { SCCL_HOME_CONFIG } from './scclHome.configuration';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';


@Injectable()
export class ScclHomeService {

    constructor(private scclGlobalService: ScclGlobalService,
                private translate: TranslateService,
                private _router: Router) {

           this.scclGlobalService.subscribe('bodyConfigs', (bodyConfigs) => {
               if (bodyConfigs !== undefined) {
                   Object.keys(bodyConfigs).forEach((config) => {
                       this.scclGlobalService.notifyDataChanged(config, bodyConfigs[config]);
                   });
               }
           });
       this.scclGlobalService.subscribe('selected.language', (language) => {
            this.translate.use(language);
        });
   }
}
