import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef, OnChanges} from '@angular/core';
<<<<<<< HEAD
import { ScclGlobalService } from '../../../../scclCommon/scclServices';
import { IScclUser, IScclHeader, IScclMainHeadbar} from '../../../../../scclModels';
import { IScclButton } from '../../../../../scclModels/scclComponents';
import { ScclLayoutService } from '../../../scclLayoutServices';
import { IScclDropDownMenu } from '../../../../../scclModels/scclComponents/scclDropDownMenu';
=======
import { ScclGlobalService } from '../../../../scclCommon/scclServices/index';
import { IScclUser, IScclHeader, IScclMainHeadbar} from '../../../../../scclModels';
import { IScclDropDownMenu } from '../../../../../scclModels/scclComponents/scclDropDownMenu/index.';
import { IScclButton } from '../../../../../scclModels/scclComponents';
import { ScclLayoutService } from '../../../scclLayoutServices';
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
declare var $: any;


@Component({
    selector: 'sccl-mid-head',
    templateUrl: './scclMidHead.html',
    styleUrls: ['./scclMidHead.scss']
})
export class ScclMidHeadComponent implements OnInit, AfterViewInit, OnChanges {

<<<<<<< HEAD
    activePageTitle: string = 'Home';
    user: IScclUser;
    buttonConfigs;
    linkBtnConfigs;
=======
    activePageTitle: string;
    user: IScclUser;
    B1: IScclButton[];
    B2: IScclButton[];
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
    @Input()
    isLoggedIn: boolean;
    @Input()
    mainHeadConfig: IScclMainHeadbar;
<<<<<<< HEAD
    userMenuConfig: IScclDropDownMenu;
    userMenuConfig2: IScclDropDownMenu;
    notifierConfig: IScclDropDownMenu;
    active = false;
    constructor(private scclGlobalService: ScclGlobalService,
=======
    dropDownMenuConfig: IScclDropDownMenu;

    constructor(private scclGlobalService: ScclGlobalService,
                private scclLayoutService: ScclLayoutService,
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
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
<<<<<<< HEAD
            this.userMenuConfig = this.mainHeadConfig.userMenuConfigs;
            this.userMenuConfig2 = this.mainHeadConfig.userMenuConfigs2;
            this.notifierConfig = this.mainHeadConfig.notifierConfig;
            this.buttonConfigs = this.mainHeadConfig.btns.btnConfigs;
            this.linkBtnConfigs = this.mainHeadConfig.btns.linkBtnConfigs;
=======
            this.dropDownMenuConfig = this.mainHeadConfig.dropDownMenuConfigs;
            this.B1 = this.mainHeadConfig.btnConfigs.B1;
            this.B2 = this.mainHeadConfig.btnConfigs.B2;
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
        }
    }

    btnActions(e): void {
<<<<<<< HEAD
        const btnId = $(e.element).attr('id');
        let button = this.buttonConfigs.buttons.filter(x => x.id === btnId);
        this.active = !this.active;
        this.scclGlobalService.notifyDataChanged(btnId, {button: button, active: this.active});
    }
}
=======
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
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
