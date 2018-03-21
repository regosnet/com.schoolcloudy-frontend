import { ScclSettingsComponent, ScclSystemComponent } from '../@scclShared/scclPanels/index';
import { scclContants } from '../@scclShared/scclCommon/scclContants/sccl.constants';

export const SCCL_ADMINISTRATOR_CONFIG = {
             headerConfig: {
                 topHeadConfig: {
                  },
                  midHeadConfig: {
                      menuDropdown: [
                         {
                             title: 'sccl.profile',
                             route: 'administrator/profile',
                             icon: 'fa fa-user-circle-o'
                         },
                         {
                             title: 'sccl.settings.title',
                             route: '/',
                             icon: 'fa fa-cogs',
                         },
                         {
                             title: 'sccl.login.sign_out',
                             route: '',
                             icon: 'fa fa-sign-out'
                         },
                         {
                             title: 'sccl.exit',
                             route: '/',
                             icon: 'fa fa-power-off',
                         }
                      ]
                  },
                  footHeadConfig: {
                      shortcutBtnsConfig: [
                             {
                                 title: 'Inbox',
                                 icon: 'inbox',
                                 route: '/inbox',
                                 class: 'loggedIn',
                                 type: 'a-link',
                                 smd: 'on-mobile'
                             },
                             {
                                 title: 'sccl.tab.messages',
                                 icon: 'mail_outline',
                                 route: 'messages',
                                 class: 'loggedIn',
                                 type: 'a-link',
                                 smd: 'on-mobile'
                             },
                             {
                                 title: 'sccl.notification',
                                 icon: 'notifications',
                                 route: '/notifications',
                                 class: 'loggedIn',
                                 type: 'a-link',
                                 smd: 'on-mobile'
                             },
                             {
                                 title: 'sccl.settings.title',
                                 icon: 'settings',
                                 route: '/settings',
                                 class: 'loggedIn settings',
                                 id: 'settings-btn',
                                 type: 'a-link'
                             },
                               {
                                   title: 'Search',
                                   icon: 'search',
                                   route: '',
                                   class: 'loggedIn',
                                   type: 'a-link'
                               }
                           ],
                           activePageTitle: 'sccl.administrator_menu.dashboard_menu.title',
                  },
             },
                  bodyConfig: {
                      /*
                          must make sure the names of these objects matches in their subscription events
                          for the ScclGlobalService
                          e.g: names - (scclTabs, loginConfig, settings)
                          should match this.scclGlobalService.subscribe('settings', => {})
                      */
                      scclTabs: [
                              {
                                  tabName: 'aside-togglable-tab',
                                  tabHeight: scclContants.layoutHeight ,
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
                                     {ref: 'system', component: ScclSystemComponent},
                                  ]
                              }
                          ]
                      }
             };
