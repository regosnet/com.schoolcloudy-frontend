import { Injectable } from '@angular/core';
import { ScclGlobalService } from './@scclShared/scclCommon/scclServices/index';

@Injectable()
export class ScclMainService {
    constructor(private scclGlobalService: ScclGlobalService) {
        setTimeout(() => {
            this.scclGlobalService.notifyDataChanged('academicSession', this.getAcademicSession());
        }, 10);
    }

    getAcademicSession() {
        return {
            semester: 4,
            week: 10
        };
    }
}
