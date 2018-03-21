import { Injectable, AfterViewInit } from '@angular/core';
import { 
        IScclMessages,
        IScclInstantMessage,
        IScclInboxMessage,
        IScclNotificationMessage
} from "../../../../scclModels";


@Injectable()
export class ScclMessageService {
    chatMessages: IScclInstantMessage[];
    notificationMessages: IScclNotificationMessage[];
    inboxMessages: IScclInboxMessage[];

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
                   icon: 'mail_outline'
               },
               body: [
                    {
                        sender: {
                            firstName: 'Eric',
                            lastName: 'Ihechukwudere',
                            username: 'eric.ihechukwudere'
                        },
                        isRead: true,
                        text: 'Thank  you for the reply',
                        time: '6 mins ago',
                        typeIcon: ''
                    },
                    {
                        sender: {
                            firstName: 'Kostya',
                            lastName: 'Bob',
                            username: 'kostya.bob'
                        },
                        text: 'Hello Administrator, please could tell me what documents...',
                        time: '6 mins ago',
                        typeIcon:'',
                        isRead: true
                    },
                    
                    {
                        sender: { 
                            firstName: 'Nick', 
                            lastName: ' Matthew',
                            username: 'nick.matthew'
                        },
                        text: 'I would like to inform you about the freshers form...',
                        time: '6 mins ago',
                        typeIcon:'',
                        isRead: false
                    },
                    {
                        sender: {
                            firstName: 'Nick',
                            lastName: 'Sherifhans',
                            username: 'nick.sherifhans'
                        },
                        text: 'Hi there! Please could send the selected students to my office...',
                        time: 'December 6 at 2:00pm',
                        typeIcon:'',
                        isRead: true
                    },
                    
                    {
                        sender: {
                            firstName: 'Henry',
                            lastName: 'Bricks',
                            username: 'henry.bricks'
                        },
                        text: 'Hello, I would like to know if the bachelor application is...',
                        time: 'December 6 at 2:00pm',
                        typeIcon:'',
                        isRead: true
                    }
               ]
           }
        ]
    }
    getInboxMessages() {
            return [
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
                   body: [
                        {
                            sender: {
                                firstName: 'Eric',
                                lastName: 'Ihechukwudere',
                                username: 'eric.ihechukwudere'
                            },
                            isRead: true,
                            text: 'Thank  you for the reply',
                            subject: 'Confirmation',
                            time: '6 mins ago',
                            typeIcon: ''
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
                            typeIcon:'',
                            isRead: true
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
                            typeIcon:'',
                            isRead: false
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
                            typeIcon:'',
                            isRead: true
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
                            typeIcon:'',
                            isRead: true
                        }
                   ]
               }
            ]
    }
    getNotificationMessages() {
        return [
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
                    body: [
                        {
                            sender: {
                                firstName: 'Eric',
                                lastName: 'Ihechukwudere',
                                username: 'eric.ihechukwudere'
                            },
                            isRead: true,
                            text: 'Thank  you for the reply',
                            time: '6 mins ago',
                            typeIcon: ''
                        },
                        {
                            sender: {
                                firstName: 'Kostya',
                                lastName: 'Bob',
                                username: 'kostya.bob'
                            },
                            text: 'Hello Administrator, please could tell me what documents...',
                            time: '6 mins ago',
                            typeIcon:'',
                            isRead: true
                        },
                        
                        {
                            sender: { 
                                firstName: 'Nick', 
                                lastName: ' Matthew',
                                username: 'nick.matthew'
                            },
                            text: 'I would like to inform you about the freshers form...',
                            time: '6 mins ago',
                            typeIcon:'',
                            isRead: false
                        },
                        {
                            sender: {
                                firstName: 'Nick',
                                lastName: 'Sherifhans',
                                username: 'nick.sherifhans'
                            },
                            text: 'Hi there! Please could send the selected students to my office...',
                            time: 'December 6 at 2:00pm',
                            typeIcon:'',
                            isRead: true
                        },
                        
                        {
                            sender: {
                                firstName: 'Henry',
                                lastName: 'Bricks',
                                username: 'henry.bricks'
                            },
                            text: 'Hello, I would like to know if the bachelor application is...',
                            time: 'December 6 at 2:00pm',
                            typeIcon:'',
                            isRead: true
                        }
                    ]
                }
        ]
    }
}