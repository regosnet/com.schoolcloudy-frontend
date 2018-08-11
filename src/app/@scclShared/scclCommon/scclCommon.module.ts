import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DeviceDetectorModule } from 'ngx-device-detector';
import 'hammerjs';
<<<<<<< HEAD
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
=======
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904

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
<<<<<<< HEAD
    ScclGlobalService,
    ScclAuthGuard,
    ScclPanelTogglerService,
    ScclPanelToggler,
    ScclToolTipDirective,
    ScclNotifierService,
    ScclScrollbarSerivce,
    ScclScrollbar,
    ScclScrollbarDirective,
    ScclScreenDimensionResolverDirective
=======
    ScclMessageService,
    ScclGlobalService,
    ScclAuthGuard
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
} from './scclServices';

import {
    ScclCardComponent,
    ScclDropDownMenuComponent,
<<<<<<< HEAD
    ScclMenuComponent,
    ScclFormComponent,
    ScclTabComponent,
    ScclSelectComponent,
    ScclTabDirective,
    ScclDropDownMenuDirective,
    ScclTabFilter,
    Menu
=======
    ScclAButtonComponent,
    ScclCollapsibleComponent,
    ScclFormComponent,
    ScclTabComponent,
    ScclSelectComponent,
    ScclTabDirective
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
} from './scclComponents';

import {
    ScclSlimScrollDirective,
<<<<<<< HEAD
=======
    ScclCollapsibleDirective,
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
    ScclSelectDirective,
    ScclHeaderDirective
} from './scclDirectives';
import { ScclTranslationModule } from '../scclLayout/scclTechnicalPanel/scclSettings/scclLanguage/translator/scclTranslatingModule';
import { ScclButtonBComponent } from './scclComponents/scclButtons/scclButtonB';
<<<<<<< HEAD
import { ScclFooterComponent } from '../scclLayout/scclFooter';
import { ScclLinkButtonComponent } from './scclComponents/scclButtons/scclLinkButton';
import {
    ScclComponentViewResolver,
    ScclComponentViewResolverService
} from './scclServices/scclComponentViewResolver';
import { ScclMenuDirective } from './scclDirectives/scclMenu';
=======

>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904



const SCCL_SHARED_SERVICE =
    [
     MalihuScrollbarService,
     ScclAuthenticationService,
<<<<<<< HEAD
     ScclNotifierService,
     ScclGlobalService,
     ScclAuthGuard,
     ScclPanelToggler,
     {provide: ScclScrollbarSerivce, useClass: ScclScrollbar},
     {provide: ScclComponentViewResolverService, useClass: ScclComponentViewResolver}
=======
     ScclMessageService,
     ScclGlobalService,
     ScclAuthGuard
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
     ];

const SCCL_DIRECTIVES =
    [
<<<<<<< HEAD
     ScclSelectDirective,
     ScclHeaderDirective,
     ScclTabDirective,
     ScclMenuDirective,
     ScclDropDownMenuDirective,
     ScclToolTipDirective,
     ScclScrollbarDirective,
     ScclScreenDimensionResolverDirective
=======
     ScclCollapsibleDirective,
     ScclSelectDirective,
     ScclHeaderDirective,
     ScclTabDirective
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
     ];

const SCCL_COMPONENTS =
    [ScclCardComponent,
     ScclDropDownMenuComponent,
<<<<<<< HEAD
     ScclLinkButtonComponent,
=======
     ScclAButtonComponent,
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
     ScclButtonBComponent,
     ScclSlimScrollDirective,
     ScclFormComponent,
     ScclMenuComponent,
     ScclTabComponent,
     ScclSelectComponent,
<<<<<<< HEAD
     ScclFooterComponent,
     Menu
=======

>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
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
