import { Injectable} from '@angular/core';
import { ScclLayoutService } from '../@scclShared/scclLayout/scclLayoutServices/scclLayout.service';
import { ScclGlobalService } from '../@scclShared/scclCommon/scclServices';
import { SCCL_STARTER_CONFIG } from './scclStarter.configuration';


@Injectable()
export class ScclStarterService {
<<<<<<< HEAD
=======

>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
    constructor(private scclGlobalService: ScclGlobalService) {
        this.scclGlobalService.notifyDataChanged('module.configurations', SCCL_STARTER_CONFIG);
   }

<<<<<<< HEAD
   notifyUserStatus() {
    this.scclGlobalService.notifyDataChanged('isLoggedIn', false);
   }

=======
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
    /*initializeModuleConfigurations(configurations) {
        this.scclLayoutService.initializeModuleConfigurations(configurations);
        this.scclLayoutService.setPageTitle('sccl.home');
    }*/
}
