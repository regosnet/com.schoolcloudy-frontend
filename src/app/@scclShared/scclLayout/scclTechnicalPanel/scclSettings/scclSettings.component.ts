import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ScclGlobalService, ScclPanelTogglerService } from '../../../scclCommon/scclServices';

@Component({
    selector: 'sccl-settings',
    templateUrl: './scclSettings.html'
})
export class ScclSettingsComponent implements OnInit {
    constructor(
        private scclGlobalService: ScclGlobalService,
        private panelToggler: ScclPanelTogglerService) {
        this.openSettingsPanel();
    }
    ngOnInit(): void {
    }
    openSettingsPanel() {
        this.scclGlobalService.subscribe('settings-btn', (_event) => {
            this.panelToggler.toggleAlongAxisX('.technical-panel', '');
        });
    }
}
