import { Component, Input, ChangeDetectorRef, AfterViewInit, OnInit, OnChanges } from '@angular/core';
import { ScclGlobalService } from '../../../../scclCommon/scclServices';
import { ScclSidebar } from '../../../../../scclModels/scclLayout/scclBody/sidebar/scclSidebar';
declare var $: any;

@Component({
    selector: 'sccl-left-menu-bar',
    templateUrl: './scclLeftMenuBar.html',
    styleUrls: ['./scclLeftMenuBar.scss']
})
export class ScclLeftMenuBarComponent extends ScclSidebar implements AfterViewInit, OnInit, OnChanges {


    constructor(private scclGlobalService: ScclGlobalService,
                private cdRef: ChangeDetectorRef) {
                    super();
                }

    ngOnInit(): void {
        this.heightResizer();
        this.collapseAsidePanel();
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            $('.collapsible').collapsible();
        }, 600);
    }

    ngOnChanges() {
        this.setMenubarHeight();
    }

    heightResizer() {
        this.scclGlobalService.subscribe('screen-dimension', (props) => {
            if (this.isStaticHeight) {
                this.menuBarHeight = props.height - this.HEIGHT;
            }
        });
    }
    collapseAsidePanel() {
        this.scclGlobalService.subscribe('collapse-panel', (isCollapsed) => {
            this.toggleAsidePanel(isCollapsed);
        });
    }
}
