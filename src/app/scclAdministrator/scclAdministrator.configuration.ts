import { scclContants } from '../@scclShared/scclCommon/scclContants/sccl.constants';
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
            B1: [
                {
                    icon: 'search',
                    id: 'search-btn',
                    tool_tip: {
                        title: 'sccl.search',
                        data_placement: 'left'
                    }
                },
                {
                    icon: 'settings',
                    id: 'settings-btn',
                    tool_tip: {
                        title: 'sccl.settings',
                        data_placement: 'buttom'
                    }
                },
                {
                    icon: 'fullscreen',
                    id: 'screen-resize-btn',
                    tool_tip: {
                        title: 'sccl.settings.title',
                        data_placement: 'buttom'
                    }
                }
            ],
            B2: [
                {
                    icon: 'menu',
                    id: 'menu-btn',
                    tool_tip: {
                        title: 'sccl.menu',
                        data_placement: 'buttom'
                    }
                }
            ]
        }
    }
};
export const SCCL_ADMINISTRATOR_CONFIG = {
    headerConfig:  head,
    bodyConfig: {
        isLoggedIn: true,
        HEIGHT: 70,
        rightSidebar: {
            /*The HEIGHT property is a constant, use to set bar
            height against window height only when user logged in*/
            HEIGHT: 80,
            isStaticHeight: true,
            menuBarHeight: 0,
            isClosed: false,
            isCollapsed: false,
            menuBarItems: [
                {title: 'sccl.dashboard', icon: 'home', route: 'dashboard'},
                {title: 'sccl.academics', icon: 'photo_album', route: 'academics'},
                {title: 'News Feed', icon: 'rss_feed', route: 'news_feed'}
            ]
        },
        leftSidebar: {
            /*The HEIGHT property is a constant, use to set bar
            height against window height only when user logged in*/
            HEIGHT: 80,
            isStaticHeight: true,
            menuBarHeight: 0,
            isClosed: false,
            isCollapsed: false,
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
                {title: 'sccl.myschedule', icon: 'schedule', route: 'administrator/schedule'}
            ]
        }
    }
};
