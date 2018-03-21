import { Component, AfterViewInit } from '@angular/core';
import { ScclGlobalService } from "../../scclCommon/scclServices";
import { ScclSelectComponent } from "../../scclCommon/scclComponents";
import { ScclSettingService } from "./scclSettings.service";




@Component({
    selector: 'sccl-settings',
    templateUrl: './scclSettings.html',
    providers: [ScclSettingService]
})
export class ScclSettingsComponent {
    constructor(private scclSettingService: ScclSettingService) { 
    }
}