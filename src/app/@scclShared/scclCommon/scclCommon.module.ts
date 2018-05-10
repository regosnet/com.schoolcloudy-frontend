import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DeviceDetectorModule } from 'ngx-device-detector';
import 'hammerjs';

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
    ScclGlobalService,
    ScclAuthGuard
} from './scclServices';

import {
    ScclCardComponent,
    ScclDropDownMenuComponent,
    ScclAButtonComponent,
    ScclCollapsibleComponent,
    ScclFormComponent,
    ScclTabComponent,
    ScclSelectComponent,
    ScclTabDirective,
    ScclDropDownMenuDirective,
    ScclTabFilter
} from './scclComponents';

import {
    ScclSlimScrollDirective,
    ScclCollapsibleDirective,
    ScclSelectDirective,
    ScclHeaderDirective
} from './scclDirectives';
import { ScclTranslationModule } from '../scclLayout/scclTechnicalPanel/scclSettings/scclLanguage/translator/scclTranslatingModule';
import { ScclButtonBComponent } from './scclComponents/scclButtons/scclButtonB';




const SCCL_SHARED_SERVICE =
    [
     MalihuScrollbarService,
     ScclAuthenticationService,
     ScclMessageService,
     ScclGlobalService,
     ScclAuthGuard
     ];

const SCCL_DIRECTIVES =
    [
     ScclCollapsibleDirective,
     ScclSelectDirective,
     ScclHeaderDirective,
     ScclTabDirective,
     ScclCollapsibleDirective,
     ScclDropDownMenuDirective
     ];

const SCCL_COMPONENTS =
    [ScclCardComponent,
     ScclDropDownMenuComponent,
     ScclAButtonComponent,
     ScclButtonBComponent,
     ScclSlimScrollDirective,
     ScclFormComponent,
     ScclCollapsibleComponent,
     ScclTabComponent,
     ScclSelectComponent
     ];

const SCCL_PIPES =
    [
    ScclPngExtPipe,
    ScclSearchFilterPipe,
    ScclSvgExtPipe,
    ScclSelectPipe,
    ScclTabFilter
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
      ScclTranslationModule,
      DeviceDetectorModule.forRoot()
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
         ScclTranslationModule,
         DeviceDetectorModule
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
