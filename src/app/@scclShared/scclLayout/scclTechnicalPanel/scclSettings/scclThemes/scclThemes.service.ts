import { Injectable } from '@angular/core';
import { scclContants } from '../../../../scclCommon/scclContants/sccl.constants';


@Injectable()
export class ScclThemesService {
    getThemesOptions() {
        return scclContants.scclThemes.theme;
    }
}
