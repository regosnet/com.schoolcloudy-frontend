import { Component, Input, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { scclContants } from '../../../../scclCommon/scclContants/sccl.constants';
import {
        IScclInstantMessage,
        IScclInboxMessage,
        IScclNotificationMessage
} from '../../../../../scclModels';
import { ScclGlobalService } from '../../../../scclCommon/scclServices/index';
declare var $: any;


@Component({
    selector: 'sccl-foot-head',
    templateUrl: './scclFootHead.html',
    styleUrls: ['./scclFootHead.scss'],
})
export class ScclFootHeadComponent implements AfterViewInit {
    @Input()
    footHeadConfig;
    dd_menu_sm: boolean;
    inboxMessage: IScclInboxMessage[] = [];
    inboxMsg_box = [];
    notificationMessage: IScclNotificationMessage[] = [];
    notificationMsg_box = [];
    instantMessage: IScclInstantMessage[] = [];
    instantMsg_box = [];
    shortcutBtns = [];
    isSticky: Boolean;
    public isRSHPanelOpen: Boolean = false;
    public activePageTitle: string;

    @Input()
    public isLoggedIn = false;
    instantMessageMenuHeader = [];
    notificationMenuHeader = [];
    inboxMenuHeader = [];

    constructor(private scclGlobalService: ScclGlobalService,
            private def: ChangeDetectorRef) {
        this.scclGlobalService.subscribe('isSticky', (isSticky) => {
            this.isSticky = isSticky;
        });
        this.scclGlobalService.subscribe('footHeadConfig', (footHeadConfigs) => {
            this.footHeadConfig = footHeadConfigs;
            this.shortcutBtns = footHeadConfigs['shortcutBtnsConfig'];
            this.activePageTitle = footHeadConfigs['activePageTitle'];
        });
    }

    ngAfterViewInit(): void {
        this.scclGlobalService.subscribe('active-page.title', (pageTitle) => {
            this.activePageTitle = pageTitle;
        });

        this.scclGlobalService.subscribe('message.instant', (instantMsg) => {
            this.instantMessage = instantMsg;
            this.instantMsg_box = instantMsg[0].body;
            this.def.detectChanges();
        });

        this.scclGlobalService.subscribe('message.inbox', (inboxMsg) => {
            this.inboxMessage = inboxMsg;
            this.inboxMsg_box = inboxMsg[0].body;
            this.def.detectChanges();
        });

        this.scclGlobalService.subscribe('message.notification', (notificationMsg: any[]) => {
            this.notificationMessage = notificationMsg;
            setTimeout(() => {
                this.notificationMsg_box = notificationMsg[0].body;
            }, 5000);
            this.def.detectChanges();
        });
    }

    public btnActions(e): void {
        const btnId = $(e).attr('id');
        switch (btnId) {
        case 'settings-btn':
            this.toggleRSHPanel();
            break;
        case 'turn_off':
            console.log('Turning Off');
            break;
        default:
            console.log('None clicked');
        }
    }

    toggleRSHPanel() {
        this.isRSHPanelOpen = !this.isRSHPanelOpen;
        this.scclGlobalService.notifyDataChanged('isRSHPanelOpen', {isRSHPanelOpen: this.isRSHPanelOpen});
    }
}
