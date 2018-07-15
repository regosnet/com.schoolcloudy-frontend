import { NgModule} from '@angular/core';
import { ScclLayoutComponent } from './scclLayout.component';
import { ScclCommonModule } from '../scclCommon/scclCommon.module';
import {
    ScclHeaderComponent,
    ScclMidHeadComponent,
    ScclTopHeadComponent
    } from './scclHeader';
import {
    ScclBodyComponent,
    ScclRightMenuBarComponent,
    ScclWidgetBarComponent,
    ScclLeftMenuBarComponent,
    ScclSidebarDirective,
    ScclUserContactsComponent,
} from './scclBody';

import { ScclTechnicalPanelModule } from './scclTechnicalPanel/scclTechnicalPanel.module';
import { ScclLayoutDirective } from './scclLayoutDirectives';
import {
    ScclLayoutService
} from './scclLayoutServices';
import { ScclUXComponentsModule } from '../scclUXComponents/scclUXComponents.module';
import { ScclWeatherWidgetComponent } from './scclBody/sidebars/scclRightMenuBar/scclWidgetBar/scclWeatherWidget';


const SCCL_LAYOUT_COMPONENTS = [
        ScclLayoutComponent,
        ScclHeaderComponent,
        ScclBodyComponent,
        ScclLeftMenuBarComponent,
        ScclRightMenuBarComponent,
        ScclWidgetBarComponent,
        ScclMidHeadComponent,
        ScclTopHeadComponent,
        ScclUserContactsComponent,
        ScclWeatherWidgetComponent
     ];
const SCCL_LAYOUT_DIRECTIVES = [
        ScclSidebarDirective,
        ScclLayoutDirective
    ];
const SCCL_LAYOUT_SERVICE = [
        ScclLayoutService
    ];


@NgModule({
    imports: [
        ScclCommonModule.forRoot(),
        ScclUXComponentsModule.forRoot(),
        ScclTechnicalPanelModule
    ],
    declarations: [...SCCL_LAYOUT_COMPONENTS, ...SCCL_LAYOUT_DIRECTIVES],
    exports: [ScclLayoutComponent, ScclCommonModule, ScclTechnicalPanelModule],
    providers: [...SCCL_LAYOUT_SERVICE],
    entryComponents: [
        ScclWidgetBarComponent,
        ScclUserContactsComponent
    ]
})
export class ScclLayoutModule {}
