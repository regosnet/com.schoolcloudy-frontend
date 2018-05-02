import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ScclGlobalService } from '../../../scclCommon/scclServices';


@Component({
    selector: 'sccl-settings',
    templateUrl: './scclSettings.html'
})
export class ScclSettingsComponent implements OnInit {
    constructor(private scclGlobalService: ScclGlobalService) {
        this.getSettings();
    }
    ngOnInit(): void {
    }

    getSettings() {
        this.scclGlobalService.subscribe('settings', (settings) => {
        });
    }
}
