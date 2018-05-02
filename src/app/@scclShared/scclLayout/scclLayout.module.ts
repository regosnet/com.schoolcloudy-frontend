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
    ScclRightMenuBarComponent,
    ScclWidgetBarComponent,
    ScclLeftMenuBarComponent,
    ScclSidebarDirective,
    ScclUserContactsComponent,
} from './scclBody';

import { ScclTechnicalPanelModule } from './scclTechnicalPanel/scclTechnicalPanel.module';
import { ScclLayoutDirective } from './scclLayoutDirectives';
import {
    ScclViewResolverService,
    ScclLayoutService
} from './scclLayoutServices';
import { ScclUXComponentsModule } from '../scclUXComponents/scclUXComponents.module';


const SCCL_LAYOUT_COMPONENTS =
    [
         ScclLayoutComponent,
         ScclHeaderComponent,
         ScclBodyComponent,
         ScclContentSectionComponent,
         ScclLeftMenuBarComponent,
         ScclRightMenuBarComponent,
         ScclWidgetBarComponent,
         ScclMidHeadComponent,
         ScclFootHeadComponent,
         ScclTopHeadComponent,
         ScclUserContactsComponent
     ];
const SCCL_LAYOUT_DIRECTIVES =
    [
         ScclSidebarDirective,
         ScclLayoutDirective
    ];
const SCCL_LAYOUT_SERVICE =
    [
        ScclViewResolverService,
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
