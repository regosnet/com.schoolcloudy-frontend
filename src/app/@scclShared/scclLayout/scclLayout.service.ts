import { Injectable, AfterViewInit, OnInit } from '@angular/core';
import { scclContants } from '../scclCommon/scclContants/sccl.constants';
import { ScclGlobalService } from '../scclCommon/scclServices/index';
import { IScclTab } from '../../scclModels';

@Injectable()
export class ScclLayoutService {
    constructor(private scclGlobalService: ScclGlobalService) {
        this.scclGlobalService.subscribe('module.configuration', (configs) => {
            this.scclGlobalService.notifyDataChanged('headerConfigs', configs['headerConfig']);
            this.scclGlobalService.notifyDataChanged('bodyConfigs', configs['bodyConfig']);
            this.setHeight();
        });
    }

    setHeight() {
        this.scclGlobalService.notifyDataChanged('window.current-height', {height: window.innerHeight});
    }

}
