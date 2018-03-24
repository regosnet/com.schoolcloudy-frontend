import { ScclNewsFeedComponent } from '../@scclShared/scclPanels/scclNewsFeed/scclNewsFeed.component';
import { ScclLoginComponent } from '../@scclShared/scclPanels/scclLogin/scclLogin.component';
import { ScclGalleryComponent } from '../@scclShared/scclPanels/scclGallery/scclGallery.component';
import { ScclSettingsComponent, ScclSystemComponent } from '../@scclShared/scclPanels';
import { scclContants } from '../@scclShared/scclCommon/scclContants/sccl.constants';

const tabHeight = 120;

export const SCCL_HOME_CONFIG = {
             headerConfig: {
                 topHeadConfig: {
                    session: [],
                    today: [],
                    lastLogin: []
                 },
                 midHeadConfig: {
                 },
                 footHeadConfig: {
                     shortcutBtnsConfig: [
                            {
                                title: 'sccl.settings.title',
                                icon: 'settings',
                                route: '/settings',
                                class: 'loggedIn settings',
                                id: 'settings-btn',
                                type: 'a-link'
                            },
                            {
                                title: 'sccl.search',
                                icon: 'search',
                                route: 'search &#xE8B6;',
                                class: 'loggedIn settings',
                                id: 'search-btn',
                                type: 'a-link'
                            }
                          ],
                      activePageTitle: 'sccl.home',
                     }
             },
            bodyConfig: {
                       /*
                           must make sure the names of these objects matches in their subscription events
                           for the ScclGlobalService
                           e.g: names - (scclTabs, loginConfig, settings)
                           should match this.scclGlobalService.subscribe('scclTabs', => {})
                       */
                       scclTabs: [
                              {
                                  tabName: 'home-main-tab',
                                  tabHeight: tabHeight,
                                  tabHeader: [
                                     {title: 'sccl.tab.news_feed', class: 's4 m6 tab-one active', ref: 'news-feed'},
                                     {title: 'sccl.tab.gallery', class: 's4 m6 tab-two', ref: 'gallery'},
                                     {title: 'sccl.login.title', class: 's4 m6 show-on-medium-and-down tab-three', ref: 'login'},
                                  ],
                                  tabBody: [
                                         {id: 'news-feed', class: 'tab-1'},
                                         {id: 'gallery', class: 'tab-2'},
                                         {id: 'login', class: 'tab-3 show-on-medium-and-down'}
                                      ],
                                  tabComponent: [
                                         {ref: 'news-feed', component: ScclNewsFeedComponent},
                                         {ref: 'gallery', component: ScclGalleryComponent},
                                         {ref: 'login', component: ScclLoginComponent}
                                      ]
                              },
                             {
                                 tabName: 'aside-togglable-tab',
                                 tabHeight: tabHeight,
                                 tabHeader: [
                                    {title: 'sccl.settings.title', class: 's12 tab-one', ref: 'settings', id: 'sm-tab'}
                                 ],
                                 tabBody: [
                                    {id: 'settings', class: 'tab-1'}
                                 ],
                                 tabComponent: [
                                    {ref: 'settings', component: ScclSettingsComponent}
                                 ]
                             }
                         ],
                         settings: [
                             {toolTip : 'Switcheone'}
                         ],

                         heightConfigs: [
                             {layout: {height: 0}},
                             {body: {height: 60}},
                             {content: {height: 85}}
                         ]
                }
            };
