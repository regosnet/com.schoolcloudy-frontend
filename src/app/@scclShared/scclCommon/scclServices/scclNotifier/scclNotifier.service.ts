import { Injectable, AfterViewInit } from '@angular/core';
import { IScclInstantMessage, IScclNotificationMessage, IScclInboxMessage } from '../../../scclUXComponents/scclMessage/scclMessageModel';


@Injectable()
<<<<<<< HEAD:src/app/@scclShared/scclCommon/scclServices/scclNotifier/scclNotifier.service.ts
export class ScclNotifierService {
=======
export class ScclMessageService {
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904:src/app/@scclShared/scclCommon/scclServices/scclMessage/scclMessage.service.ts
    instantMessages: IScclInstantMessage[];
    notificationMessages: IScclNotificationMessage[];
    inboxMessages: IScclInboxMessage[];
    private instant_messages_route = '/messages';
    private notification_messages_route = '/notifications';
    private inbox_messages_route = '/inbox';

    getInstantMessages() {
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
               content: [
                    {
                        sender: {
                            firstName: 'Eric',
                            lastName: 'Ihechukwudere',
                            username: 'eric.ihechukwudere'
                        },
                        text: 'Thank  you for the reply',
                        time: '6 mins ago',
                        typeIcon: '',
                        isRead: true,
                        route: this.instant_messages_route
                    },
                    {
                        sender: {
                            firstName: 'Kostya',
                            lastName: 'Bob',
                            username: 'kostya.bob'
                        },
                        text: 'Hello Administrator, please could tell me what documents...',
                        time: '6 mins ago',
                        typeIcon: '',
                        isRead: true,
                        route: this.instant_messages_route
                    },

                    {
                        sender: {
                            firstName: 'Nick',
                            lastName: ' Matthew',
                            username: 'nick.matthew'
                        },
                        text: 'I would like to inform you about the freshers form...',
                        time: '6 mins ago',
                        typeIcon: '',
                        isRead: false,
                        route: this.instant_messages_route
                    },
                    {
                        sender: {
                            firstName: 'Nick',
                            lastName: 'Sherifhans',
                            username: 'nick.sherifhans'
                        },
                        text: 'Hi there! Please could send the selected students to my office...',
                        time: 'December 6 at 2:00pm',
                        typeIcon: '',
                        isRead: true,
                        route: this.instant_messages_route
                    },

                    {
                        sender: {
                            firstName: 'Henry',
                            lastName: 'Bricks',
                            username: 'henry.bricks'
                        },
                        text: 'Hello, I would like to know if the bachelor application is...',
                        time: 'December 6 at 2:00pm',
                        typeIcon: '',
                        isRead: true,
                        route: this.instant_messages_route
                    }
               ]
           }
        ];
    }
    getInboxMessages() {
            return [
               {
                   header: [
                      {
                          title: 'sccl.message.inbox',
                          route: '#!',
                      },
                      {
                          title: 'sccl.compose',
                          route: '/new-notification'
                      }

                   ],
                   btn_conf: {
                       title: 'sccl.message.inbox',
                       class: 'inbox',
                       d_a: 'dd-inbox-menu',
                       d_p: 'bottom',
                       icon: 'inbox'
                   },
                   content: [
                        {
                            sender: {
                                firstName: 'Eric',
                                lastName: 'Ihechukwudere',
                                username: 'eric.ihechukwudere'
                            },
                            text: 'Thank  you for the reply',
                            subject: 'Confirmation',
                            time: '6 mins ago',
                            typeIcon: '',
                            isRead: true,
                            route: this.inbox_messages_route
                        },
                        {
                            sender: {
                                firstName: 'Kostya',
                                lastName: 'Bob',
                                username: 'kostya.bob'
                            },
                            text: 'Hello Administrator, please could tell me what documents...',
                            subject: 'New Administration',
                            time: '6 mins ago',
                            typeIcon: '',
                            isRead: true,
                            route: this.inbox_messages_route
                        },

                        {
                            sender: {
                                firstName: 'Nick',
                                lastName: ' Matthew',
                                username: 'nick.matthew'
                            },
                            text: 'I would like to inform you about the freshers form...',
                            subject: 'Note received',
                            time: '6 mins ago',
                            typeIcon: '',
                            isRead: false,
                            route: this.inbox_messages_route
                        },
                        {
                            sender: {
                                firstName: 'Nick',
                                lastName: 'Sherifhans',
                                username: 'nick.sherifhans'
                            },
                            text: 'Hi there! Please could send the selected students to my office...',
                            subject: 'Students from your area',
                            time: 'December 6 at 2:00pm',
                            typeIcon: '',
                            isRead: true,
                            route: this.inbox_messages_route
                        },

                        {
                            sender: {
                                firstName: 'Henry',
                                lastName: 'Bricks',
                                username: 'henry.bricks'
                            },
                            text: 'Hello, I would like to know if the bachelor application is...',
                            subject: 'Bachelor Application forms inquries',
                            time: 'December 6 at 2:00pm',
                            typeIcon: '',
                            isRead: true,
                            route: this.inbox_messages_route
                        }
                   ]
               }
            ];
    }
    getAllNotification() {
        return [
                        {
                            sender: {
                                firstName: 'Eric',
                                lastName: 'Ihechukwudere',
                            },
                            text: 'Thank  you for the reply',
                            time: '6 mins ago',
<<<<<<< HEAD:src/app/@scclShared/scclCommon/scclServices/scclNotifier/scclNotifier.service.ts
                            title: 'Message received!',
=======
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904:src/app/@scclShared/scclCommon/scclServices/scclMessage/scclMessage.service.ts
                            typeIcon: '',
                            isRead: true,
                            route: this.notification_messages_route
                        },
                        {
                            sender: {
                                firstName: 'Kostya',
                                lastName: 'Bob'
                            },
                            text: 'Hello Administrator, please could tell me what documents...',
                            time: '6 mins ago',
<<<<<<< HEAD:src/app/@scclShared/scclCommon/scclServices/scclNotifier/scclNotifier.service.ts
                            title: 'Document Information',
=======
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904:src/app/@scclShared/scclCommon/scclServices/scclMessage/scclMessage.service.ts
                            typeIcon: '',
                            isRead: true,
                            route: this.notification_messages_route
                        },

                        {
                            sender: {
                                firstName: 'Nick',
<<<<<<< HEAD:src/app/@scclShared/scclCommon/scclServices/scclNotifier/scclNotifier.service.ts
                                lastName: ' Matthew'
=======
                                lastName: ' Matthew',
                                username: 'nick.matthew'
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904:src/app/@scclShared/scclCommon/scclServices/scclMessage/scclMessage.service.ts
                            },
                            text: 'I would like to inform you about the freshers form...',
                            title: 'New Students',
                            time: '6 mins ago',
                            typeIcon: '',
                            isRead: false,
                            route: this.notification_messages_route
                        },
                        {
                            sender: {
                                firstName: 'Eric',
                                lastName: 'Ihechukwudere',
                            },
                            text: 'Thank  you for the reply',
                            title: 'Confirmation',
                            time: '6 mins ago',
<<<<<<< HEAD:src/app/@scclShared/scclCommon/scclServices/scclNotifier/scclNotifier.service.ts
                            typeIcon: 'fa fa-envelope',
=======
                            typeIcon: '',
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904:src/app/@scclShared/scclCommon/scclServices/scclMessage/scclMessage.service.ts
                            isRead: false,
                            route: this.notification_messages_route
                        },
                        {
                            sender: {
                                firstName: 'Nick',
                                lastName: 'Sherifhans',
                            },
                            text: 'Hi there! Please could send the selected students to my office...',
                            title: 'Student Application',
                            time: 'December 6 at 2:00pm',
                            typeIcon: '',
                            isRead: true,
                            route: this.notification_messages_route
                        },

                        {
                            sender: {
                                firstName: 'Henry',
                                lastName: 'Bricks',
                                username: 'henry.bricks'
                            },
                            text: 'Hello, I would like to know if the bachelor application is...',
                            time: 'December 6 at 2:00pm',
                            typeIcon: '',
                            isRead: true,
                            route: this.notification_messages_route
                        }
                    ];
    }
}
