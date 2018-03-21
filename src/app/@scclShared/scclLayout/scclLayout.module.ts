import { NgModule} from '@angular/core';
import { ScclLayoutComponent } from './scclLayout.component';
import { ScclCommonModule } from '../scclCommon/scclCommon.module';
import {
    ScclHeaderComponent,
    ScclMidHeadComponent,
    ScclFootHeadComponent,
    ScclTopHeadComponent
    } from './scclHeader';
import {
    ScclBodyComponent,
    ScclContentSectionComponent,
    ScclLeftSideMenuBarComponent,
    ScclUserGreetingBarComponent,
    ScclWidgetBarComponent,
    ScclRSHPanelComponent
} from './scclBody';
import { ScclRSHPanelService } from './scclBody/scclRSHPanel/ScclRSHPanel.service';
import { ScclLayoutService } from './scclLayout.service';

const SCCL_LAYOUT_COMPONENTS =
    [
         ScclLayoutComponent,
         ScclHeaderComponent,
         ScclBodyComponent,
         ScclContentSectionComponent,
         ScclLeftSideMenuBarComponent,
         ScclUserGreetingBarComponent,
         ScclWidgetBarComponent,
         ScclRSHPanelComponent,
         ScclMidHeadComponent,
         ScclFootHeadComponent,
         ScclTopHeadComponent
     ];


@NgModule({
    imports: [ScclCommonModule.forRoot()],
    declarations:
        [...SCCL_LAYOUT_COMPONENTS],
    exports: [ScclLayoutComponent, ScclCommonModule],

    providers: [ScclRSHPanelService, ScclLayoutService]
})
export class ScclLayoutModule {}
