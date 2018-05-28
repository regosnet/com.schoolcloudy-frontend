import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef, OnChanges} from '@angular/core';
import { ScclGlobalService } from '../../../../scclCommon/scclServices';
import { IScclUser, IScclHeader, IScclMainHeadbar} from '../../../../../scclModels';
import { IScclButton } from '../../../../../scclModels/scclComponents';
import { ScclLayoutService } from '../../../scclLayoutServices';
import { IScclDropDownMenu } from '../../../../../scclModels/scclComponents/scclDropDownMenu';
declare var $: any;


@Component({
    selector: 'sccl-mid-head',
    templateUrl: './scclMidHead.html',
    styleUrls: ['./scclMidHead.scss']
})
export class ScclMidHeadComponent implements OnInit, AfterViewInit, OnChanges {

    activePageTitle: string = 'Home';
    user: IScclUser;
    buttonConfigs;
    linkBtnConfigs;
    @Input()
    isLoggedIn: boolean;
    @Input()
    mainHeadConfig: IScclMainHeadbar;
    userMenuConfig: IScclDropDownMenu;
    notifierConfig: IScclDropDownMenu;
    active = false;
    constructor(private scclGlobalService: ScclGlobalService,
                private cdRef: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.getCurrentUser();
    }

    ngAfterViewInit(): void {
        this.scclGlobalService.subscribe('active-page.title', (pageTitle) => {
            this.activePageTitle = pageTitle;
            this.cdRef.detectChanges();
        });
    }

    getCurrentUser() {
        this.scclGlobalService.subscribe('isUser', (usr: IScclUser) => {
            this.user = usr;
        });
    }

    ngOnChanges(): void {
        if (this.mainHeadConfig !== undefined) {
            this.userMenuConfig = this.mainHeadConfig.userMenuConfigs;
            this.notifierConfig = this.mainHeadConfig.notifierConfig;
            this.buttonConfigs = this.mainHeadConfig.btns.btnConfigs;
            this.linkBtnConfigs = this.mainHeadConfig.btns.linkBtnConfigs;
        }
    }

    btnActions(e): void {
        const btnId = $(e.element).attr('id');
        let button = this.buttonConfigs.buttons.filter(x => x.id === btnId);
        this.active = !this.active;
        this.scclGlobalService.notifyDataChanged(btnId, {button: button, active: this.active});
    }
}