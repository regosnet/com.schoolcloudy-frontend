import { scclContants } from '../@scclShared/scclCommon/scclContants/sccl.constants';
import { ScclLoginComponent } from './scclLogin/scclLogin.component';

const tabHeight = 120;
/*const sidebarWidth = 27;*/

export const SCCL_STARTER_CONFIG = {
    headerConfig: {
        topHeadConfigs: {
            session: [],
            today: [],
            lastLogin: []
        },
        midHeadConfig: {
            user: {
                isLoggedIn: false,
            },
            menuDropdown: [
                {
                    title: 'sccl.login.title',
                    route: '/login',
                    icon: 'fa fa-user-circle-o'
                },
                {
                    title: 'sccl.settings.title',
                    route: '/settings',
                    icon: 'fa fa-cogs',
                },
                {
                    title: 'sccl.search',
                    route: '/search',
                    icon: 'fa fa-search',
                },
                {
                    title: 'sccl.tab.news_feed',
                    route: '/news_feed',
                    icon: 'fa fa-square',
                },
                {
                    title: 'sccl.tab.gallery',
                    route: '/gallery',
                    icon: 'fa fa-th',
                }
            ]
        },
        footHeadConfigs: {
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
                ]
            }
        },
    bodyConfig: {
        isLoggedIn: false,
        HEIGHT: 70,
        rightSidebar: {
            /*The HEIGHT property is a constant, use to set bar
            height against window height only when user logged in*/
            HEIGHT: 650,
            isStaticHeight: false,
            menuBarHeight: 0,
            resolvedComponent: {
                ref: 'login', component: ScclLoginComponent
            }
        },
        leftSidebar: {
            /*The HEIGHT property is a constant, use to set bar
            height against window height only when user logged in*/
            HEIGHT: 350,
            isStaticHeight: false,
            menuBarHeight: 0,
            menuBarItems: [
                {title: 'sccl.home', icon: 'home', route: ''},
                {title: 'sccl.gallery', icon: 'photo_album', route: 'gallery'},
                {title: 'sccl.news_feed', icon: 'rss_feed', route: 'news_feed'}
            ]
        }
    }
};
