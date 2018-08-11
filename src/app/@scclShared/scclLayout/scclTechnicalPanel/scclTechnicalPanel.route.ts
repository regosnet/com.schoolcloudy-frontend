<<<<<<< HEAD
/*import { Routes, RouterModule} from '@angular/router';
=======
import { Routes, RouterModule} from '@angular/router';
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
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
<<<<<<< HEAD
                   
                ],
                tabBody: [
                   {id: 'settings', class: 'tab-1'},
                   
                ],
                tabComponent: [
                   {ref: 'settings', component: ScclSettingsComponent},
                   
=======
                   {title: 'sccl.tab.messages', class: 's6 tab-two', ref: 'system', id: 'sm-tab'},
                ],
                tabBody: [
                   {id: 'settings', class: 'tab-1'},
                   {id: 'system', class: 'tab-2'},
                ],
                tabComponent: [
                   {ref: 'settings', component: ScclSettingsComponent},
                   {ref: 'system', component: ScclSystemInformationComponent},
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
                ]
            }
        }
    },
<<<<<<< HEAD
    {
=======
    /*{
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
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
<<<<<<< HEAD
    }
=======
    }*/
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
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
