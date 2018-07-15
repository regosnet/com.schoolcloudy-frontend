import { Component, AfterViewInit, OnInit, OnChanges, Input} from '@angular/core';
import { resizeSidePanel } from '../../scclCommon/scclAnimations/scclAnimations';
import { IScclRightSidebar, IScclLeftSidebar, IScclBody } from '../../../scclModels';
import { ScclGlobalService } from '../../scclCommon/scclServices';
import { trigger, transition, state, style, animate } from '@angular/animations';
declare var $: any;

@Component({
    selector: 'sccl-body',
    templateUrl: './scclBody.html',
    styleUrls: ['./scclBody.scss'],
    animations: [
        trigger('collapseWidth', [
            state('true', style({
                width: 70 + 'px'
            })),
            transition('true <=> false', animate('200ms ease-in'))
        ]),
        ,
        trigger('right-padding', [
            state('true', style({
                paddingRight: 75 + 'px'
            })),
            transition('true <=> false', animate('200ms ease-in'))
        ]),
        trigger('left-padding', [
            state('true', style({
                paddingLeft: 75 + 'px'
            })),
            transition('true <=> false', animate('200ms ease-in'))
        ])
    ]
})
export class ScclBodyComponent implements AfterViewInit, OnInit, OnChanges {
    @Input()
    height: number;
    @Input() isLoggedIn: Boolean;
    rightSidebarConfig: IScclRightSidebar;
    leftSidebarConfig: IScclLeftSidebar;
    @Input() bodyConfig: IScclBody;

    constructor(
        private scclGlobalService: ScclGlobalService) {
    }

    ngOnInit() {
    }
    public ngAfterViewInit(): void {
    }

    ngOnChanges(): void {
        if (this.bodyConfig !== undefined) {
            this.rightSidebarConfig = this.bodyConfig.rightSidebar;
            this.leftSidebarConfig = this.bodyConfig.leftSidebar;
        }
    }
}
