import { scclContants } from '../@scclShared/scclCommon/scclContants/sccl.constants';
import { ScclLoginComponent } from './scclLogin/scclLogin.component';
import { IScclHeader } from '../scclModels';
const head: IScclHeader = {
    topHeadConfig: {
        schoolCalender: {
            session: {
                weekDay: '',
                weekNumber: 0,
                semester: 0
            }
        },
        dateToday: new Date(),
        userActivity: {
            lastLogin: {
                time: '12/18/2018'
            }
        }
    },
    mainHeadConfig: {
        dropDownMenuConfigs: {
            header: [],
            itemsContainer: [
                {
                    title: 'sccl.profile',
                    route: 'administrator/profile',
                    icon: 'fa fa-user-circle-o'
                },
                {
                    title: 'sccl.messenger',
                    route: '/messages',
                    icon: 'fa fa-envelope',
                },
                {
                    title: 'sccl.inbox',
                    route: '/inbox',
                    icon: 'fa fa-inbox',
                },
                {
                    title: 'sccl.login.sign_out',
                    href: '/',
                    icon: 'fa fa-sign-out'
                }
            ],
            buttonConfigs: {},
            footer: []
        },
        btnConfigs: {
            B1: {
                buttons: [
                    {
                        icon: 'search',
                        id: 'search-btn',
                        type: 'b-btn',
                        tool_tip: {
                            title: 'sccl.search',
                            data_placement: 'left'
                        }
                    },
                    {
                        icon: 'settings',
                        id: 'settings-btn',
                        type: 'b-btn',
                        tool_tip: {
                            title: 'sccl.settings',
                            data_placement: 'left'
                        }
                    },
                    {
                        icon: 'fullscreen',
                        id: 'fullscreen-btn',
                        type: 'b-btn',
                        tool_tip: {
                            title: 'sccl.fullscreen',
                            data_placement: 'left'
                        }
                    }
                ]
            } , 
            B2: {
                buttons: [
                    {
                        icon: 'menu',
                        id: 'menu-btn',
                        type: 'b-btn',
                        tool_tip: {
                            title: 'sccl.menu',
                            data_placement: 'buttom'
                        }
                    }
                ]
            }
        }
    }
};

export const SCCL_STARTER_CONFIG = {
    headerConfig: head,
    bodyConfig: {
        isLoggedIn: false,
        HEIGHT: 70,
        rightSidebar: {
            /*The HEIGHT property is a constant, use to set bar
            height against window height only when user logged in*/
            HEIGHT: 370,
            isStaticHeight: false,
            menuBarHeight: 0,
            resolvedComponent: {
                ref: 'login', component: ScclLoginComponent
            }
        },
        leftSidebar: {
            /*The HEIGHT property is a constant, use to set bar
            height against window height only when user logged in*/
            HEIGHT: 399,
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


/*
{
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
        },*/
