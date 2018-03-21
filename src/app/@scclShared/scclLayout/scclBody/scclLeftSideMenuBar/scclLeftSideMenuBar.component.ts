import { Component, Input, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ScclGlobalService } from "../../../scclCommon/scclServices";
declare var $:any;

@Component({
    selector: 'sccl-left-side-menu-bar',
    templateUrl: './scclLeftSideMenuBar.html',
    styleUrls: ['./scclLeftSideMenuBar.scss']
})
export class ScclLeftSideMenuBarComponent implements AfterViewInit{
    
    height
    isSticky
    
    @Input() 
    isLoggedIn: boolean = false;
    
    constructor(private scclGlobalService: ScclGlobalService,
                private cdRef: ChangeDetectorRef) {
        this.scclGlobalService.subscribe('isSticky', (isSticky) => {
            this.isSticky = isSticky
        })
        
        this.scclGlobalService.subscribe('setHeight', (res) => {
            this.height = res.height;
            this.cdRef.detectChanges()
        })
    }
    ngAfterViewInit(): void {
        $('.collapsible').collapsible();
    }
}