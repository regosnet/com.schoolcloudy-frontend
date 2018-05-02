import { Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import { ScclSettingsComponent } from './scclSettings';
import { ScclSystemInformationComponent } from './scclSystemInformation';
import { ScclGlobalService } from '../../scclCommon/scclServices';

@Injectable()
export class ScclTechnicalPanelResolver implements Resolve<any> {
    constructor(private scclGlobalService: ScclGlobalService) {
    }
    resolve() {
        this.scclGlobalService.subscribe('technicalPanel', (panelConfig) => {
            console.log(panelConfig);
        });
        return null;
    }
}
