import { Component, ChangeDetectorRef, AfterViewInit, OnInit, Input, OnChanges, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ScclGlobalService } from '../../scclCommon/scclServices';
import { IScclRightSidebar, IScclLeftSidebar, IScclBody } from '../../../scclModels/scclLayout';

declare var $: any;

@Component({
    selector: 'sccl-body',
    templateUrl: './scclBody.html',
    styleUrls: ['./scclBody.scss']
})
export class ScclBodyComponent implements AfterViewInit, OnInit, OnChanges {
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
    ngOnChanges(): void {
        if (this.bodyConfig !== undefined) {
            this.rightSidebarConfig = this.bodyConfig.rightSidebar;
            this.leftSidebarConfig = this.bodyConfig.leftSidebar;
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
    }
}
