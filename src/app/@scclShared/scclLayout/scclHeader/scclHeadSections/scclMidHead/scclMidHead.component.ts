import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef, OnChanges} from '@angular/core';
import { ScclGlobalService } from '../../../../scclCommon/scclServices/index';
import { IScclUser, IScclHeader, IScclMainHeadbar} from '../../../../../scclModels';
import { IScclDropDownMenu } from '../../../../../scclModels/scclComponents/scclDropDownMenu/index.';
import { IScclButton } from '../../../../../scclModels/scclComponents';
import { ScclLayoutService } from '../../../scclLayoutServices';
declare var $: any;


@Component({
    selector: 'sccl-mid-head',
    templateUrl: './scclMidHead.html',
    styleUrls: ['./scclMidHead.scss']
})
export class ScclMidHeadComponent implements OnInit, AfterViewInit, OnChanges {

    activePageTitle: string;
    user: IScclUser;
    B1: IScclButton[];
    B2: IScclButton[];
    @Input()
    isLoggedIn: boolean;
    @Input()
    mainHeadConfig: IScclMainHeadbar;
    dropDownMenuConfig: IScclDropDownMenu;

    constructor(private scclGlobalService: ScclGlobalService,
                private scclLayoutService: ScclLayoutService,
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
            this.dropDownMenuConfig = this.mainHeadConfig.dropDownMenuConfigs;
            this.B1 = this.mainHeadConfig.btnConfigs.B1;
            this.B2 = this.mainHeadConfig.btnConfigs.B2;
        }
    }

    btnActions(e): void {
        const btnId = $(e).attr('id');
        console.log(btnId);
        switch (btnId) {
        case 'settings-btn':
            this.scclLayoutService.panelSlideToggle();
            break;
        case 'search-btn':
            console.log('Search bar opening');
            break;
        case 'screen-resize-btn':
            console.log(' resize opening');
            break;
        case 'menu-btn':
            this.scclLayoutService.collapseSidePanel();
            break;
        default:
            console.log('None clicked');
        }
    }
}
