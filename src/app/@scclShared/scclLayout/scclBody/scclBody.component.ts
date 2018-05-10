import { Component, ChangeDetectorRef, AfterViewInit, OnInit, Input, OnChanges, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ScclGlobalService } from '../../scclCommon/scclServices';
import { IScclRightSidebar, IScclLeftSidebar, IScclBody } from '../../../scclModels/scclLayout';
import { resizeSidePanel } from '../../scclCommon/scclAnimations/scclAnimations';
import { trigger, transition, query, animate, style, state } from '@angular/animations';

declare var $: any;

@Component({
    selector: 'sccl-body',
    templateUrl: './scclBody.html',
    styleUrls: ['./scclBody.scss'],
    animations: resizeSidePanel
})
export class ScclBodyComponent implements AfterViewInit, OnInit, OnChanges {
    HEIGHT: number;
    isLoggedIn: Boolean;
    rightSidebarConfig: IScclRightSidebar;
    leftSidebarConfig: IScclLeftSidebar;

    @Input() bodyConfig: IScclBody;

    @ViewChild('right') sidebar: ElementRef;

    constructor(
        private scclGlobalService: ScclGlobalService,
        private cdRef: ChangeDetectorRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        this.initPanels();
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
            setTimeout(() => {
                //console.log($('section.logged-in > aside').outerWidth(true), window.innerWidth);
            }, 1000);
        }
    }

    collapseAsidePanel(e) {
        console.log(e)
    }
}
