import { Injectable} from '@angular/core';
import { ScclLayoutService } from '../@scclShared/scclLayout/scclLayoutServices/scclLayout.service';
import { ScclGlobalService } from '../@scclShared/scclCommon/scclServices';
import { SCCL_STARTER_CONFIG } from './scclStarter.configuration';


@Injectable()
export class ScclStarterService {

    constructor(private scclGlobalService: ScclGlobalService) {
        this.scclGlobalService.notifyDataChanged('module.configurations', SCCL_STARTER_CONFIG);
   }

    /*initializeModuleConfigurations(configurations) {
        this.scclLayoutService.initializeModuleConfigurations(configurations);
        this.scclLayoutService.setPageTitle('sccl.home');
    }*/
}
