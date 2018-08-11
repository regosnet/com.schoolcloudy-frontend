import { NgModule} from '@angular/core';
import { ScclCommonModule } from '../../scclCommon/scclCommon.module';
import { ScclSystemInformationComponent } from './scclSystemInformation';
import { ScclSettingsComponent, ScclLanguageComponent, ScclThemesComponent } from './scclSettings';
import { ScclTechnicalPanelComponent } from './scclTechnicalPanel.component';
<<<<<<< HEAD
import { ScclTechnicalPanelService } from './scclTechnicalPanel.service';

const SCCL_LAYOUT_COMPONENTS = [
=======
import { ScclTechnicalPanelRouter } from './scclTechnicalPanel.route';
import { ScclTechnicalPanelResolver } from './scclTechnicalPanel.resolver';
import { ScclTechnicalPanelService } from './scclTechnicalPanel.service';

const SCCL_LAYOUT_COMPONENTS =
    [
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
        ScclTechnicalPanelComponent,
        ScclSettingsComponent,
        ScclSystemInformationComponent,
        ScclLanguageComponent,
        ScclThemesComponent
     ];


@NgModule({
<<<<<<< HEAD
    imports: [ScclCommonModule.forRoot()],
=======
    imports: [ScclCommonModule.forRoot(), ScclTechnicalPanelRouter],
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
    declarations: [...SCCL_LAYOUT_COMPONENTS],
    exports: [...SCCL_LAYOUT_COMPONENTS],
    providers: [ScclTechnicalPanelService],
    entryComponents: [
        ScclSettingsComponent,
        ScclSystemInformationComponent,
     ],
})
export class ScclTechnicalPanelModule {}
