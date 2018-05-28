import { ScclGlobalService } from '../../../../scclCommon/scclServices';
import { Component, AfterViewInit, OnInit, OnChanges } from '@angular/core';
import { ScclAsidebar } from '../sccl-aside-bar';
declare var $: any;

@Component({
    selector: 'sccl-left-menu-bar',
    templateUrl: './scclLeftMenuBar.html',
    styleUrls: ['./scclLeftMenuBar.scss']
})
export class ScclLeftMenuBarComponent extends ScclAsidebar implements AfterViewInit, OnInit, OnChanges {


    ngOnInit(): void {
        this.heightResizer();
    }

    ngAfterViewInit(): void {
        
    }

    ngOnChanges() {
       
    }

    heightResizer() { 
        /*this.scclGlobalService.subscribe('screen-dimension', (props) => {
            if (this.isStaticHeight) {
                this.menuBarHeight = props.height - this.HEIGHT;
            }
        });*/
    }
}
