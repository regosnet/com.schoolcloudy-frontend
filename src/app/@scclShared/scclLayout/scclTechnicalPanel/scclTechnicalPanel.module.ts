import { NgModule} from '@angular/core';
import { ScclCommonModule } from '../../scclCommon/scclCommon.module';
import { ScclSystemInformationComponent } from './scclSystemInformation';
import { ScclSettingsComponent, ScclLanguageComponent, ScclThemesComponent } from './scclSettings';
import { ScclTechnicalPanelComponent } from './scclTechnicalPanel.component';
import { ScclTechnicalPanelRouter } from './scclTechnicalPanel.route';
import { ScclTechnicalPanelService } from './scclTechnicalPanel.service';

const SCCL_LAYOUT_COMPONENTS =
    [
        ScclTechnicalPanelComponent,
        ScclSettingsComponent,
        ScclSystemInformationComponent,
        ScclLanguageComponent,
        ScclThemesComponent
     ];


@NgModule({
    imports: [ScclCommonModule.forRoot(), ScclTechnicalPanelRouter],
    declarations: [...SCCL_LAYOUT_COMPONENTS],
    exports: [...SCCL_LAYOUT_COMPONENTS],
    providers: [ScclTechnicalPanelService],
    entryComponents: [
        ScclSettingsComponent,
        ScclSystemInformationComponent,
     ],
})
export class ScclTechnicalPanelModule {}
