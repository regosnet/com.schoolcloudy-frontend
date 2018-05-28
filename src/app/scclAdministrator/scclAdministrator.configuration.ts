import { scclContants } from '../@scclShared/scclCommon/scclContants/sccl.constants';
import { IScclHeader, IScclLayout, IScclBody } from '../scclModels';
import { IScclTechnicalPanel } from '../scclModels/scclLayout/scclTechnicalPanel';

const technicalPanel: IScclTechnicalPanel = {
    name: 'technical-panel',
    isStaticHeight: true,
    state: {
        height: window.innerHeight - 1,
        right: "+=250",
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

        },
        systemInfo: {

        }
    }// TECHNICAL PANEL CONTENTS AND CONFIGURATIONS
}

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
            trigger: {
                //title: 'sccl.',
                //icon: 'home',
                class: 'user-dropdown-menu-button',
                paired_icon: false,
                id: 'user-dropdown-menu',
                tool_tip: {
                    delay: 50,
                    position: 'left',
                    title: '',
                    html: false,
                }
            },
            footer: [],
            size: {height: 300, width: 200},
            properties: {
                constrainWidth: false,
                gutter: 0,
                belowOrigin: true,
                alignment: 'right', 
            }
        },
        notifierConfig: {
            header: [
                {
                    title: 'sccl.message.notification',
                    route: '#!',
                },
                {
                    title: 'sccl.mark_all_read',
                    route: '#!',
                },
                {
                    title: 'sccl.settings',
                    route: '#!',
                },
                {
                    icon: 'fa fa-pencil-square-o',
                    route: '#!',
                }
            ],
            itemsContainer: [],
            footer: [
                {
                    title: 'See All',
                    route: '/notifications'
                }
            ],
            size: {
                height: 400,
                width: 400
            },
            trigger: {
                title: 'sccl.message.notification',
                class: 'notification-dropdown-menu-button',
                icon: 'notifications',
                paired_icon: false,
                id: 'notification',
                tool_tip: {
                    delay: 50,
                    position: 'bottom',
                    title: 'sccl.notifications',
                    html: false,
                }
            },
            properties: {
                constrainWidth: false,
                gutter: 0,
                belowOrigin: true,
                alignment: 'right', 
            }
        },
        btns: {
            btnConfigs: {
                buttons: [
                    {
                        icon: 'search',
                        paired_icon: false,
                        id: 'search-btn',
                        tool_tip: {
                            delay: 50,
                            position: 'right',
                            title: 'sccl.menu',
                            html: false,
                        }
                    },
                    {
                        icon: 'settings',
                        paired_icon: false,
                        id: 'settings-btn',
                        tool_tip: {
                            delay: 50,
                            position: 'right',
                            title: 'sccl.menu',
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
            height: window.innerHeight - 70,
            left: "+=250",
            right: "-=250",
            isClosed: false,
            isCollapsed: false,
        },
        
        menuBarItems: [
            {title: 'sccl.dashboard', icon: 'home', route: 'dashboard'},
            {title: 'sccl.academics', icon: 'photo_album', route: 'academics'},
            {title: 'News Feed', icon: 'rss_feed', route: 'news_feed'}
        ],
        footer: {
            height: 50,
            btns: {
                btnConfigs: {
                    buttons: [
                        {
                            icon: 'chevron_right',
                            paired_icon: true,
                            icons: {
                                icon1: {
                                    title: 'chevron_right',
                                    id: 'minimize-panel-btn',
                                    tool_tip: {
                                        title: 'sccl.minimize'
                                    }
                                },
                                icon2: {
                                    title: 'chevron_left',
                                    id: 'maximize-panel-btn',
                                    tool_tip: {
                                        title: 'sccl.maximize'
                                    }
                                }
                            },
                            id: 'minimize-panel-btn',
                            tool_tip: {
                                delay: 50,
                                position: 'right',
                                title: 'sccl.minimize',
                                html: false,                 }
                        }
                    ],
                    wrapper: {
                        title: 'right_foot_menu',
                        icon: 'menu',
                        active: false
                    }
                }
            }
            }
    },
    leftSidebar: {
        name: 'left-side-menu-bar',
        isStaticHeight: true,
        state: {
            height: window.innerHeight - 70,
            left: "+=250",
            right: "-=250",
            isClosed: false,
            isCollapsed: false,
        },
        menuBarItems: [
            {title: 'sccl.dashboard', icon: 'dashboard', route: 'administrator/dashboard'},
            {title: 'sccl.academics', icon: 'book', route: 'administrator/academics'},
            {title: 'sccl.manage_users', icon: 'people', route: 'administrator/manage-users',
                children: [
                    {title: 'Students', route: 'administrator/manage-users/students'},
                    {title: 'Staffs', route: 'administrator/manage-users/staffs'},
                    {title: 'Parents', route: 'administrator/manage-users/parents'}
                ]
            },
            {title: 'sccl.taskboard', icon: 'developer_board', route: 'administrator/taskboard'},
            {title: 'sccl.message.inbox', icon: 'inbox', route: 'administrator/inbox'},
            {title: 'sccl.schedule', icon: 'schedule', route: 'administrator/schedule'},
            {title: 'sccl.todos', icon: 'list', route: 'administrator/todo-list'},
            {title: 'sccl.taskboard', icon: 'developer_board', route: 'administrator/taskboard'},
            {title: 'sccl.message.inbox', icon: 'inbox', route: 'administrator/inbox'},
            {title: 'sccl.schedule', icon: 'schedule', route: 'administrator/schedule'},
            {title: 'sccl.todos', icon: 'list', route: 'administrator/todo-list'},
            {title: 'sccl.taskboard', icon: 'developer_board', route: 'administrator/taskboard'},
            {title: 'sccl.message.inbox', icon: 'inbox', route: 'administrator/inbox'},
            {title: 'sccl.schedule', icon: 'schedule', route: 'administrator/schedule'},
            {title: 'sccl.todos', icon: 'list', route: 'administrator/todo-list'},
            {title: 'sccl.taskboard', icon: 'developer_board', route: 'administrator/taskboard'},
            {title: 'sccl.message.inbox', icon: 'inbox', route: 'administrator/inbox'},
            {title: 'sccl.schedule', icon: 'schedule', route: 'administrator/schedule'},
            {title: 'sccl.todos', icon: 'list', route: 'administrator/todo-list'},
            {title: 'sccl.taskboard', icon: 'developer_board', route: 'administrator/taskboard'},
            {title: 'sccl.message.inbox', icon: 'inbox', route: 'administrator/inbox'},
            {title: 'sccl.schedule', icon: 'schedule', route: 'administrator/schedule'},
            {title: 'sccl.todos', icon: 'list', route: 'administrator/todo-list'},
            {title: 'sccl.taskboard', icon: 'developer_board', route: 'administrator/taskboard'},
            {title: 'sccl.message.inbox', icon: 'inbox', route: 'administrator/inbox'},
            {title: 'sccl.schedule', icon: 'schedule', route: 'administrator/schedule'},
            {title: 'sccl.todos', icon: 'list', route: 'administrator/todo-list'},
            {title: 'sccl.taskboard', icon: 'developer_board', route: 'administrator/taskboard'},
            {title: 'sccl.message.inbox', icon: 'inbox', route: 'administrator/inbox'},
            {title: 'sccl.schedule', icon: 'schedule', route: 'administrator/schedule'},
            {title: 'sccl.todos', icon: 'list', route: 'administrator/todo-list'},
            {title: 'sccl.taskboard', icon: 'developer_board', route: 'administrator/taskboard'},
            {title: 'sccl.message.inbox', icon: 'inbox', route: 'administrator/inbox'},
            {title: 'sccl.schedule', icon: 'schedule', route: 'administrator/schedule'},
            {title: 'sccl.todos', icon: 'list', route: 'administrator/todo-list'},

        ],
        footer: {
            height: 50,
           btns: {
            btnConfigs: {
                buttons: [
                    {
                        icon: 'settings',
                        paired_icon: false,
                        id: 'settings-btn',
                        tool_tip: {
                            delay: 50,
                            position: 'right',
                            title: 'sccl.settings',
                            html: false,
                        }
                    },
                    {
                        icon: 'power_settings_new',
                        paired_icon: false,
                        id: 'sign_out-btn',
                        tool_tip: {
                            delay: 50,
                            position: 'right',
                            title: 'sccl.exit',
                            html: false,                   }
                    },
                    {
                        icon: 'chevron_left',
                        paired_icon: true,
                        icons: {
                            icon1: {
                                title: 'chevron_right',
                                id: 'minimize-panel-btn',
                                tool_tip: {
                                    title: 'sccl.minimize'
                                }
                            },
                            icon2: {
                                title: 'chevron_left',
                                id: 'maximize-panel-btn',
                                tool_tip: {
                                    title: 'sccl.maximize'
                                }
                            }
                        },
                        id: 'minimize-panel-btn',
                        tool_tip: {
                            delay: 50,
                            position: 'right',
                            title: 'sccl.minimize',
                            html: false,                      }
                    },
                ],
                wrapper: {
                    title: 'left_foot_menu',
                    icon: 'menu',
                    active: false
                }
            }
           }
        }
    }
};

const layoutConfig: IScclLayout = {
    isLoggedIn: true,
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
                        icon: 'menu',
                        id: 'menu-btn',
                        paired_icon: true,
                        icons: {
                            icon1: {
                                title: 'menu',
                                id: 'menu-btn',
                                tool_tip: {
                                    title: 'sccl.menu'
                                }
                            },
                            icon2: {
                                title: 'clear',
                                id: 'clear-btn',
                                tool_tip: {
                                    title: 'sccl.clear'
                                }
                            }
                        },
                        tool_tip: {
                            delay: 50,
                            position: 'right',
                            title: 'sccl.menu',
                            html: false,
                        }
                    }, 
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
                        icon: 'notifications',
                        id: 'notifications-btn',
                        paired_icon: false,
                        tool_tip: {
                            delay: 50,
                            position: 'right',
                            title: 'sccl.notifications',
                            html: false,
                        }
                    },
                    {
                        icon: 'settings',
                        id: 'settings-btn',
                        paired_icon: false,
                        tool_tip: {
                            delay: 50,
                            position: 'right',
                            title: 'sccl.settings.title',
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
export const SCCL_ADMINISTRATOR_CONFIG = layoutConfig;
