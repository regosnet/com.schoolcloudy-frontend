import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IScclInboxMessage, IScclNotificationMessage, IScclInstantMessage } from '../scclMessageModel';
import { ScclGlobalService } from '../../../scclCommon/scclServices';
import { IScclDropDownMenu } from '../../../../scclModels/scclComponents/scclDropDownMenu';

declare var $: any;

@Component({
    selector: 'sccl-message-drop-down',
    templateUrl: './scclMessageDropDown.html',
    styleUrls: ['./scclMessageDropDown.scss']
})
export class ScclMessageDropDownComponent implements OnChanges, OnInit {
  /* message content are loaded asynchronosly in these boxes */
    dropDownMenuConfig: IScclDropDownMenu;
    constructor(private scclGlobalService: ScclGlobalService) {
        this.scclGlobalService.subscribe('message.notification', (res) => {
           setTimeout(() => {
            this.dropDownMenuConfig.itemsContainer = [
                 {
                     sender: {
                         firstName: 'Eric',
                         lastName: 'Ihechukwudere',
                     },
                     text: 'Thank  you for the reply',
                     title: 'Confirmation',
                     time: '6 mins ago',
                     typeIcon: 'fa fa-envelope',
                     isRead: false,
                     route: '/inbox'
                 },
                 {
                    sender: {
                        firstName: 'Eric',
                        lastName: 'Ihechukwudere',
                    },
                    text: 'Thank  you for the reply',
                    title: 'Confirmation',
                    time: '6 mins ago',
                    typeIcon: 'fa fa-envelope',
                    isRead: false,
                    route: '/inbox'
                },
                {
                    sender: {
                        firstName: 'Eric',
                        lastName: 'Ihechukwudere',
                    },
                    text: 'Thank  you for the reply',
                    title: 'Confirmation',
                    time: '6 mins ago',
                    typeIcon: 'fa fa-envelope',
                    isRead: false,
                    route: '/inbox'
                },
                {
                    sender: {
                        firstName: 'Eric',
                        lastName: 'Ihechukwudere',
                    },
                    text: 'Thank  you for the reply',
                    title: 'Confirmation',
                    time: '6 mins ago',
                    typeIcon: 'fa fa-envelope',
                    isRead: false,
                    route: '/inbox'
                },
                {
                    sender: {
                        firstName: 'Eric',
                        lastName: 'Ihechukwudere',
                    },
                    text: 'Thank  you for the reply',
                    title: 'Confirmation',
                    time: '6 mins ago',
                    typeIcon: 'fa fa-envelope',
                    isRead: false,
                    route: '/inbox'
                },
                {
                    sender: {
                        firstName: 'Eric',
                        lastName: 'Ihechukwudere',
                    },
                    text: 'Thank  you for the reply',
                    title: 'Confirmation',
                    time: '6 mins ago',
                    typeIcon: 'fa fa-envelope',
                    isRead: false,
                    route: '/inbox'
                },
            ];
         
           }, 5000);
        });
    }

    ngOnInit(): void {
       this.dropDownMenuConfig = this.getMessageMenuConfig();
    }

    ngOnChanges(): void {
    }

    getMessageMenuConfig(): IScclDropDownMenu {
        return {
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
            trigger: {
                title: 'sccl.message.notification',
                class: 'notification-dropdown-menu-button',
                icon: 'notifications',
                paired_icon: false,
                id: 'notification',
                tool_tip: {
                    delay: 50,
                    position: 'right',
                    title: 'sccl.notification',
                    html: false,
                }
            }
        };
    }
}

/*
title: 'sccl.message.notification',
                class: 'notification',
                d_a: 'dd-notification-menu',
                d_p: 'bottom',
                icon: 'notifications'

/*
getMessageMenuConfig() {
        return [
            {
                header: [
                    {
                        type: 'sccl.message.instant',
                        settings: '#!',
                        new: '#!',
                        seeAll: '#!'
                    }
                    ],
                    btn_conf: {
                        title: 'sccl.message.instant',
                        class: 'instant',
                        d_a: 'dd-instant-menu',
                        d_p: 'bottom',
                        icon: 'mail_outline',
                    },
                    body: []
            },
             {
                header: [
                    {
                        type: 'sccl.message.inbox',
                        settings: '#!',
                        new: '#!',
                        seeAll: '#!'
                    }
                    ],
                    btn_conf: {
                        title: 'sccl.message.inbox',
                        class: 'inbox',
                        d_a: 'dd-inbox-menu',
                        d_p: 'bottom',
                        icon: 'inbox'
                    },
                    body: []
            },
            {
                header: [
                    {
                        type: 'sccl.message.notification',
                        settings: '#!',
                        seeAll: '#!'
                        }
                    ],
                    btn_conf: {
                    title: 'sccl.message.notification',
                    class: 'notification',
                    d_a: 'dd-notification-menu',
                    d_p: 'bottom',
                    icon: 'notifications'
                    },
                    body: []
            }
        ];
    }

*/
