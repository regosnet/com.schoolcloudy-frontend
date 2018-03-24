import { ScclUserContactsComponent } from '../scclLayout/scclBody/scclWidgetBar/scclUserContacts';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import 'hammerjs';

import {
    ScclGalleryComponent,
    ScclLanguageComponent,
    ScclNewsFeedComponent,
    ScclSettingsComponent,
    ScclSystemComponent,
    ScclThemesComponent
} from '../scclPanels';

import {
    MalihuScrollbarModule,
    MalihuScrollbarService
} from 'ngx-malihu-scrollbar';

import {
    ScclPngExtPipe,
    ScclSearchFilterPipe,
    ScclSvgExtPipe,
    ScclSelectPipe
} from './scclPipes/sccl.pipe';

import {
    ScclAuthenticationService,
    ScclMessageService,
    ScclGlobalService
} from './scclServices';

import {
    ScclCardComponent,
    ScclDropDownMenuComponent,
    ScclAButtonComponent,
    ScclBButtonComponent,
    ScclCollapsibleComponent,
    ScclFormComponent,
    ScclTabComponent,
    ScclSelectComponent
} from './scclComponents';

import {
    ScclSlimScrollDirective,
    ScclLayoutDirective,
    ScclCollapsibleDirective,
    ScclTabDirective,
    ScclSelectDirective,
    ScclHeaderDirective
} from './scclDirectives';

import {
    ScclTranslationModule
} from '../scclPanels/scclSettings/scclLanguage/translator/scclTranslatingModule';
import { ScclLanguageService } from '../scclPanels/scclSettings/scclLanguage/scclLanguage.service';
import { ScclThemesService } from '../scclPanels/scclSettings/scclThemes/scclThemes.service';


const SCCL_SHARED_SERVICE =
    [
     MalihuScrollbarService,
     ScclAuthenticationService,
     ScclMessageService,
     ScclLanguageService,
     ScclThemesService,
     ScclGlobalService
     ];

const SCCL_DIRECTIVES =
    [
     ScclLayoutDirective,
     ScclCollapsibleDirective,
     ScclTabDirective,
     ScclSelectDirective,
     ScclHeaderDirective
     ];

const SCCL_COMPONENTS =
    [ScclCardComponent,
     ScclDropDownMenuComponent,
     ScclAButtonComponent,
     ScclBButtonComponent,
     ScclSlimScrollDirective,
     ScclFormComponent,
     ScclCollapsibleComponent,
     ScclTabComponent,
     ScclGalleryComponent,
     ScclLanguageComponent,
     ScclNewsFeedComponent,
     ScclUserContactsComponent,
     ScclSettingsComponent,
     ScclSystemComponent,
     ScclSelectComponent,
     ScclThemesComponent
     ];

const SCCL_PIPES =
    [
    ScclPngExtPipe,
    ScclSearchFilterPipe,
    ScclSvgExtPipe,
    ScclSelectPipe
     ];

@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule,
      HttpClientModule,
      HttpModule,
      MalihuScrollbarModule.forRoot(),
      ScclTranslationModule
    ],
    declarations: [
      ...SCCL_PIPES,
      ...SCCL_DIRECTIVES,
      ...SCCL_COMPONENTS
    ],
    providers: [
        ...SCCL_SHARED_SERVICE
    ],
    exports: [
         ...SCCL_PIPES,
         ...SCCL_DIRECTIVES,
         ...SCCL_COMPONENTS,
         RouterModule,
         CommonModule,
         ReactiveFormsModule,
         FormsModule,
         HttpClientModule,
         HttpModule,
         MalihuScrollbarModule,
         ScclTranslationModule
    ]
})
export class ScclCommonModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders> {
          ngModule: ScclCommonModule,
          providers: [
               SCCL_SHARED_SERVICE,
          ],
        };
      }
}
