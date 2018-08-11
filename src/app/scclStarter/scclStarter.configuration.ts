import { scclContants } from '../@scclShared/scclCommon/scclContants/sccl.constants';
import { ScclLoginComponent } from './scclLogin/scclLogin.component';
<<<<<<< HEAD
import { IScclHeader, IScclBody, IScclLayout } from '../scclModels';
import { IScclTechnicalPanel } from '../scclModels/scclLayout/scclTechnicalPanel';
const userMenuItems = [
    {
        title: 'sccl.home',
        route: '/home',
        icon: 'fa fa-home'
    },
    {
        title: 'sccl.gallery',
        route: '/gallery',
        icon: 'fa fa-envelope',
    },
    {
        title: 'sccl.news_feed',
        route: '/news_feed',
        icon: 'fa fa-inbox',
    },
    {
        title: 'sccl.login.title',
        route: '/login',
        icon: 'fa fa-sign-in'
    }
];
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
        userMenuConfigs: {
            header: [],
            itemsContainer: userMenuItems,
            trigger: {
                title: 'sccl.menu',
                icon: 'menu',
                paired_icon: false,
                class: 'dropdown-trigger',
                id: 'dropdown-trigger',
                tool_tip: {
                    delay: 50,
                    position: 'right',
                    title: 'sccl.menu',
                    html: true,
                }
            },
            footer: [],
            properties: {
                constrainWidth: false,
                gutter: 1,
                belowOrigin: true,
                alignment: 'left',
            }
        },
        /*userMenuConfig2 displays only on large screens */
        userMenuConfigs2: {
            header: [],
            itemsContainer: userMenuItems,
            trigger: {
                title: 'sccl.menu',
                icon: 'menu',
                paired_icon: false,
                class: 'dropdown-trigger2',
                id: 'dropdown-trigger2',
                tool_tip: {
                    delay: 50,
                    position: 'left',
                    title: 'sccl.menu',
                    html: false,
                }
            },
            footer: [],
            properties: {
                constrainWidth: false,
                gutter: 1,
                belowOrigin: false,
                alignment: 'right',
            }
        },
        notifierConfig: {},
        btns: {
            btnConfigs: {
                /* these buttons do not show in the head bar on small screen.
                    They show in footer bar only on the small screen */
                buttons: [
                    {
                        icon: 'search',
                        id: 'search-btn',
                        paired_icon: false,
                        tool_tip: {
                            delay: 50,
                            position: 'right',
                            title: 'sccl.search',
                            html: false,
                        }
                    },
                    {
                        icon: 'settings',
                        paired_icon: false,
                        id: 'settings-btn',
                        tool_tip: {
                            delay: 50,
                            position: 'left',
                            title: 'sccl.settings',
                            html: false,
                        }
                    },
                    {
                        icon: 'fullscreen',
                        title: 'Fullscreen',
                        paired_icon: true,
                        icons: {
                            icon1: {
                                title: 'fullscreen',
                                id: 'fullscreen-btn',
                                tool_tip: {
                                    title: 'sccl.fullscreen'
                                }
                            },
                            icon2: {
                                title: 'fullscreen_exit',
                                id: 'fullscreen_exit-btn',
                                tool_tip: {
                                    title: 'sccl.fullscreen_exit'
                                }
                            }
                        },
                        id: 'fullscreen-btn',
                        tool_tip: {
                            delay: 50,
                            position: 'right',
                            title: 'sccl.menu',
                            html: false,
                        }
                    }
                ]
            },
            /* these buttons show in the head bar on small screen.*/
            linkBtnConfigs: {
                buttons: [
                    {
                        title: 'sccl.login.title',
                        id: 'login-btn',
                        paired_icon: false,
                        tool_tip: {
                            delay: 50,
                            position: 'right',
                            title: 'sccl.login.title',
                            html: false,
                        }
                    },
                ]
            }
        }
    }
};

const body: IScclBody = {
    HEIGHT: 70,
    rightSidebar: {
        name: 'right-side-menu-bar',
        isStaticHeight: true,
        state: {
            height: 370,
            width: 300,
            isClosed: false,
            isCollapsed: false,
        },
        resolvedComponent: {
            ref: 'login', component: ScclLoginComponent
        },
        footer: {
            height: 0
        }
    },
    leftSidebar: {
        name: 'left-side-menu-bar',
        isStaticHeight: true,
        state: {
            height: 470,
            width: 300,
            isClosed: false,
            isCollapsed: false,
        },
        menuBarItems: [
            {title: 'sccl.home', icon: 'home', route: 'home', id: 'home'},
            {title: 'sccl.gallery', icon: 'photo_album', route: 'gallery', id: 'gallery'},
            {title: 'sccl.news_feed', icon: 'rss_feed', route: 'news_feed', id: 'news-feed'}
        ],
        footer: {
            height: 0
        }
    }

};
const technicalPanel: IScclTechnicalPanel = {
        name: 'technical-panel',
        isStaticHeight: false,
        state: {
            height: window.innerHeight - 1,
            isClosed: false,
            isCollapsed: false,
        },
        menuBarItems: [],
        footer: {
            height: 50,
            btns: {
                btnConfigs: {
                    buttons: [
                        {
                            icon: 'clear',
                            id: 'clear-btn',
                            tool_tip: {
                                delay: 50,
                                position: 'right',
                                title: 'sccl.clear',
                                html: false,
                            }
                        }
                    ],
                    wrapper: {
                        title: 'right_foot_menu',
                        icon: 'menu',
                        active: false
                    }
                }
            }
        },
    tabContent: {
        settings: {
        }
    }// TECHNICAL PANEL CONTENTS AND CONFIGURATIONS
};

const layoutConfig: IScclLayout = {
    isLoggedIn: false,
    height: 0,
    headConfig: head,
    bodyConfig: body,
    resizeWidth: false,
    scclTheme: 'sccl-default-theme',
    technicalPanel: technicalPanel,
    footer: {
        height: 50,
        btns: {
            linkBtnConfigs: {
                buttons: [
                    {
                        icon: 'search',
                        id: 'search-btn',
                        paired_icon: false,
                        tool_tip: {
                            delay: 50,
                            position: 'right',
                            title: 'sccl.search',
                            html: false,
                        }
                    },
                    {
                        icon: 'settings',
                        paired_icon: false,
                        id: 'settings-btn',
                        tool_tip: {
                            delay: 50,
                            position: 'left',
                            title: 'sccl.settings',
                            html: false,
                        }
                    },
                    {
                        icon: 'fullscreen',
                        paired_icon: true,
                        icons: {
                            icon1: {
                                title: 'fullscreen',
                                id: 'fullscreen-btn',
                                tool_tip: {
                                    title: 'sccl.fullscreen'
                                }
                            },
                            icon2: {
                                title: 'fullscreen_exit',
                                id: 'fullscreen_exit-btn',
                                tool_tip: {
                                    title: 'sccl.fullscreen_exit'
                                }
                            }
                        },
                        id: 'fullscreen-btn',
                        tool_tip: {
                            delay: 50,
                            position: 'right',
                            title: 'sccl.menu',
                            html: false,
                        }
                    }
                ]
            }
        }
    }
};
export const SCCL_STARTER_CONFIG = layoutConfig;

=======

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
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
