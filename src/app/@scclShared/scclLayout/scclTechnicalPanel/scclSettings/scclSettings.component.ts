import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ScclGlobalService, ScclPanelTogglerService, ScclPanelToggler } from '../../../scclCommon/scclServices';

@Component({
    selector: 'sccl-settings',
    templateUrl: './scclSettings.html'
})
export class ScclSettingsComponent implements OnInit {
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
        });
    }
}
