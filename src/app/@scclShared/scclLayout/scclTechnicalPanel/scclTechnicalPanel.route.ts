/*import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ScclTechnicalPanelComponent } from './scclTechnicalPanel.component';
import { ScclSettingsComponent } from './scclSettings';
import { ScclSystemInformationComponent } from './scclSystemInformation';

const routes: Routes = [
    {
        path: '',
        component: ScclTechnicalPanelComponent,
        outlet: 'sccl-technical-panel',
        data: {
            tab: {
                tabName: 'technical-panel-tab',
                tabHeight: 120,
                tabHeader: [
                   {title: 'sccl.settings.title', class: 's6 tab-one active', ref: 'settings', id: 'sm-tab'},
                   
                ],
                tabBody: [
                   {id: 'settings', class: 'tab-1'},
                   
                ],
                tabComponent: [
                   {ref: 'settings', component: ScclSettingsComponent},
                   
                ]
            }
        }
    },
    {
        path: 'administrator',
        component: ScclTechnicalPanelComponent,
        outlet: 'sccl-technical-panel',
        data: {
            tab: {
                tabName: 'technical-panel-tab',
                tabHeight: 120,
                tabHeader: [
                   {title: 'sccl.settings.title', class: 's6 tab-one active', ref: 'settings', id: 'sm-tab'},
                   {title: 'sccl.tab.messages', class: 's6 tab-two', ref: 'system', id: 'sm-tab'},
                ],
                tabBody: [
                   {id: 'settings', class: 'tab-1'},
                   {id: 'system', class: 'tab-2'},
                ],
                tabComponent: [
                   {ref: 'settings', component: ScclSettingsComponent},
                   {ref: 'system', component: ScclSystemInformationComponent},
                ]
            }
        }
    }
];

export const ScclTechnicalPanelRouter: ModuleWithProviders = RouterModule.forChild(routes);
/*
 {
        path: 'administrator',
        component: ScclTechnicalPanelComponent,
        outlet: 'sccl-technical-panel',
        data: {
            tab: {
                tabName: 'technical-panel-tab',
                tabHeight: 120,
                tabHeader: [
                   {title: 'sccl.settings.title', class: 's6 tab-one active', ref: 'settings', id: 'sm-tab'},
                   {title: 'sccl.tab.messages', class: 's6 tab-two', ref: 'system', id: 'sm-tab'},
                ],
                tabBody: [
                   {id: 'settings', class: 'tab-1'},
                   {id: 'system', class: 'tab-2'},
                ],
                tabComponent: [
                   {ref: 'settings', component: ScclSettingsComponent},
                   {ref: 'system', component: ScclSystemInformationComponent},
                ]
            }
        }
    }
*/
