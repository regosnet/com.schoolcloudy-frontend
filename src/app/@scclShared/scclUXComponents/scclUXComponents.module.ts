import { NgModule, ModuleWithProviders } from '@angular/core';
import { ScclGalleryComponent } from './scclGallery';
import { ScclNewsFeedComponent } from './scclNewsFeed';
import { ScclCommonModule } from '../scclCommon/scclCommon.module';
import { ScclMessageDropDownComponent } from './scclMessage';




const SCCL_SHARED_SERVICE =
    [
     ];

const SCCL_DIRECTIVES =
    [
     ];

const SCCL_COMPONENTS =
    [
     ScclGalleryComponent,
     ScclNewsFeedComponent,
     ScclMessageDropDownComponent

     ];

const SCCL_PIPES =
    [
     ];

@NgModule({
    imports: [
      ScclCommonModule.forRoot()
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
         ...SCCL_COMPONENTS
    ]
})
export class ScclUXComponentsModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders> {
          ngModule: ScclUXComponentsModule,
          providers: [
               SCCL_SHARED_SERVICE
          ],
        };
      }
}
