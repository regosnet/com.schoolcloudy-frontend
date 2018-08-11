import { Component, AfterViewInit, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ScclGlobalService, ScclPanelTogglerService, ScclPanelToggler } from '../../../scclCommon/scclServices';
=======
import { ScclGlobalService } from '../../../scclCommon/scclServices';

>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904

@Component({
    selector: 'sccl-settings',
    templateUrl: './scclSettings.html'
})
export class ScclSettingsComponent implements OnInit {
<<<<<<< HEAD
    constructor(
        private scclGlobalService: ScclGlobalService,
    private ts: ScclPanelToggler) {
    }
    ngOnInit(): void {
        this.openSettingsPanel();
    }
    openSettingsPanel() {
        this.scclGlobalService.subscribe('settings-btn', (_event) => {
            this.ts.slideOnX('.technical-panel', '');
=======
    constructor(private scclGlobalService: ScclGlobalService) {
        this.getSettings();
    }
    ngOnInit(): void {
    }

    getSettings() {
        this.scclGlobalService.subscribe('settings', (settings) => {
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
        });
    }
}
