import { ScclGlobalService } from '../../../../scclCommon/scclServices';
import { ScclSidebar } from '../../../../../scclModels/scclLayout/scclBody/sidebar/scclSidebar';
import { Component, AfterViewInit, OnInit, OnChanges } from '@angular/core';
declare var $: any;

@Component({
    selector: 'sccl-left-menu-bar',
    templateUrl: './scclLeftMenuBar.html',
    styleUrls: ['./scclLeftMenuBar.scss']
})
export class ScclLeftMenuBarComponent extends ScclSidebar implements AfterViewInit, OnInit, OnChanges {

    constructor(private scclGlobalService: ScclGlobalService) {
        super();
    }

    ngOnInit(): void {
        this.heightResizer();
    }

    ngAfterViewInit(): void {
        
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
}
