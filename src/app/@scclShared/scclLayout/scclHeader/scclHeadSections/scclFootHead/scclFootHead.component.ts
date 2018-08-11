import { Component, Input, AfterViewInit, ChangeDetectorRef, OnChanges} from '@angular/core';
import { scclContants } from '../../../../scclCommon/scclContants/sccl.constants';
import { ScclGlobalService } from '../../../../scclCommon/scclServices';
import { ScclLayoutService } from '../../../scclLayoutServices/scclLayout.service';
declare var $: any;


@Component({
    selector: 'sccl-foot-head',
    templateUrl: './scclFootHead.html',
    styleUrls: ['./scclFootHead.scss'],
})
export class ScclFootHeadComponent implements AfterViewInit, OnChanges {
    @Input()
    footHeadConfig;
    dd_menu_sm: boolean;
    inboxMessage= [];
    inboxMsg_box = [];
    notificationMessage= [];
    notificationMsg_box = [];
    instantMessage = [];
    instantMsg_box = [];
    shortcutBtns = [];
    isSticky: Boolean;
    public isSlideIn: Boolean = false;
    public activePageTitle: string;

    @Input()
    public isLoggedIn = false;
    instantMessageMenuHeader = [];
    notificationMenuHeader = [];
    inboxMenuHeader = [];

    constructor(private scclGlobalService: ScclGlobalService,
            private cdRef: ChangeDetectorRef,
            private scclLayoutService: ScclLayoutService) {
    }

    ngAfterViewInit(): void {
        this.scclGlobalService.subscribe('active-page.title', (pageTitle) => {
            this.activePageTitle = pageTitle;
            this.cdRef.detectChanges();
        });

        this.scclGlobalService.subscribe('message.instant', (instantMsg) => {
            this.instantMessage = instantMsg;
            this.instantMsg_box = instantMsg[0].body;
            this.cdRef.detectChanges();
        });

        this.scclGlobalService.subscribe('message.inbox', (inboxMsg) => {
            this.inboxMessage = inboxMsg;
            this.inboxMsg_box = inboxMsg[0].body;
            this.cdRef.detectChanges();
        });

        this.scclGlobalService.subscribe('message.notification', (notificationMsg: any[]) => {
            this.notificationMessage = notificationMsg;
            setTimeout(() => {
                this.notificationMsg_box = notificationMsg[0].body;
            }, 5000);
            this.cdRef.detectChanges();
        });

      this.scclGlobalService.subscribe('window.current-width', (windowWidth) => {
            if (windowWidth.width <= 992) {
              this.dd_menu_sm = true;
            }else {
              this.dd_menu_sm = false;
            }
            this.cdRef.detectChanges();
        });
    }

    public btnActions(e): void {
        const btnId = $(e).attr('id');
        switch (btnId) {
        case 'settings-btn':
            this.scclLayoutService.panelSlideToggle();
            break;
        case 'turn_off':
            console.log('Turning Off');
            break;
        default:
            console.log('None clicked');
        }
    }

    ngOnChanges(): void {
        if (this.footHeadConfig !== undefined) {
            this.shortcutBtns = this.footHeadConfig.shortcutBtnsConfig;
        }
    }
}
