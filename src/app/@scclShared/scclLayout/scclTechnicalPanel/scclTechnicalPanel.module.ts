import { NgModule} from '@angular/core';
import { ScclCommonModule } from '../../scclCommon/scclCommon.module';
import { ScclSystemInformationComponent } from './scclSystemInformation';
import { ScclSettingsComponent, ScclLanguageComponent, ScclThemesComponent } from './scclSettings';
import { ScclTechnicalPanelComponent } from './scclTechnicalPanel.component';
import { ScclTechnicalPanelService } from './scclTechnicalPanel.service';

const SCCL_LAYOUT_COMPONENTS = [
        ScclTechnicalPanelComponent,
        ScclSettingsComponent,
        ScclSystemInformationComponent,
        ScclLanguageComponent,
        ScclThemesComponent
     ];


@NgModule({
    imports: [ScclCommonModule.forRoot()],
    declarations: [...SCCL_LAYOUT_COMPONENTS],
    exports: [...SCCL_LAYOUT_COMPONENTS],
    providers: [ScclTechnicalPanelService],
    entryComponents: [
        ScclSettingsComponent,
        ScclSystemInformationComponent,
     ],
})
export class ScclTechnicalPanelModule {}
