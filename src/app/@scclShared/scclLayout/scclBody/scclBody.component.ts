<<<<<<< HEAD
import { Component, AfterViewInit, OnInit, OnChanges, Input} from '@angular/core';
import { resizeSidePanel } from '../../scclCommon/scclAnimations/scclAnimations';
import { IScclRightSidebar, IScclLeftSidebar, IScclBody } from '../../../scclModels';
import { ScclGlobalService } from '../../scclCommon/scclServices';
import { trigger, transition, state, style, animate } from '@angular/animations';
=======
import { Component, ChangeDetectorRef, AfterViewInit, OnInit, Input, OnChanges, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ScclGlobalService } from '../../scclCommon/scclServices';
import { IScclRightSidebar, IScclLeftSidebar, IScclBody } from '../../../scclModels/scclLayout';

>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
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
<<<<<<< HEAD
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

=======
    HEIGHT: number;
    isLoggedIn: Boolean;
    rightSidebarConfig: IScclRightSidebar;
    leftSidebarConfig: IScclLeftSidebar;
    isAsidePanelCollapsed: Boolean;
    @Input() bodyConfig: IScclBody;

    @ViewChild('right') sidebar: ElementRef;

    constructor(
        private scclGlobalService: ScclGlobalService,
        private cdRef: ChangeDetectorRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        this.initPanels();
        this.collapseAsidePanel();
    }
    public ngAfterViewInit(): void {
    }

    initPanels() {
       this.scclGlobalService.subscribe('screen-dimension', (windowHeight) => {
            this.HEIGHT = windowHeight.height - this.HEIGHT;
            this.cdRef.detectChanges();
        });
    }
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
    ngOnChanges(): void {
        if (this.bodyConfig !== undefined) {
            this.rightSidebarConfig = this.bodyConfig.rightSidebar;
            this.leftSidebarConfig = this.bodyConfig.leftSidebar;
<<<<<<< HEAD
        }
=======
            this.isLoggedIn = this.bodyConfig.isLoggedIn;
            this.HEIGHT = this.bodyConfig.HEIGHT;
            console.log(this.sidebar);
            setTimeout(() => {
                console.log($('section.logged-in > aside').outerWidth(true), window.innerWidth);
            }, 1000);
        }
    }

    collapseAsidePanel() {
        this.scclGlobalService.subscribe('collapse-panel', (isCollapsed) => {
            this.isAsidePanelCollapsed = isCollapsed;
        });
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
    }
}
