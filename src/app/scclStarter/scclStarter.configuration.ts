import { scclContants } from '../@scclShared/scclCommon/scclContants/sccl.constants';
import { ScclLoginComponent } from './scclLogin/scclLogin.component';
import { IScclHeader, IScclBody, IScclLayout } from '../scclModels';
import { IScclTechnicalPanel } from '../scclModels/scclLayout/scclTechnicalPanel';
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
            itemsContainer: [
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
            trigger: {
                title: 'sccl.menu',
                icon: 'menu',
                paired_icon: false,
                class: 'unknown-dropdown-user-btn',
                id: 'unknown-dropdown-user-menu',
                tool_tip: {
                    delay: 50,
                    position: 'right',
                    title: 'sccl.menu',
                    html: false,
                }
            },
            footer: [],
            properties: {
                constrainWidth: false,
                gutter: 1,
                belowOrigin: true,
                alignment: 'left', 
            },
            size: {height: 300, width: 200}
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
        isStaticHeight: false,
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
        isStaticHeight: false,
        state: {
            height: 399,
            width: 300,
            isClosed: false,
            isCollapsed: false,
        },
        menuBarItems: [
            {title: 'sccl.home', icon: 'home', route: 'home', id: 'home'},
            {title: 'sccl.gallery', icon: 'photo_album', route: 'gallery', id: 'gallery'},
            {title: 'sccl.news_feed', icon: 'rss_feed', route: 'news_feed', id: 'news-feed'},
            {title: 'sccl.login.title', icon: 'lock', route: 'login', id: 'login'}
        ],
        footer: {
            height: 0
        }
    }

};
const technicalPanel: IScclTechnicalPanel = {
        name: 'right-side-menu-bar',
        isStaticHeight: true,
        state: {
            height: window.innerHeight - 1,
            left: "+=250",
            right: "-=250",
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
}
export const SCCL_STARTER_CONFIG = layoutConfig;

