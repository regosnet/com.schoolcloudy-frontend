import { Component, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { 
         IScclHeader,
         IScclFootHead,
         IScclMidHead,
         IScclTopHead
} from "../../../scclModels";
import { ScclGlobalService } from "../../scclCommon/scclServices/index";
import { ScclLayoutService } from "../scclLayout.service";



@Component({
    selector: 'sccl-header',
    templateUrl: './scclHeader.html',
    styleUrls: ['./scclHeader.scss']
})
export class ScclHeaderComponent implements AfterViewInit, IScclHeader, OnInit{
   
    footHeadConfig: IScclFootHead;
    midHeadConfig: IScclMidHead;
    topHeadConfig: IScclTopHead;
    isLoggedIn: Boolean; 

    ngOnInit(): void {
        this.scclGlobalService.subscribe('headerConfigs', (configs:IScclHeader) => {
            if(configs !== undefined) {
                Object.keys(configs).forEach((config) => {
                    this.scclGlobalService.notifyDataChanged(config, configs[config]);
                })
            }
            this.cdRef.detectChanges();
        })
    }

    constructor(
        private scclGlobalService: ScclGlobalService,
        private cdRef:ChangeDetectorRef,
        private scclLayoutService: ScclLayoutService) {
    }
    
    ngAfterViewInit(): void {
        this.scclGlobalService.subscribe('isLoggedIn', (res) => {
            this.isLoggedIn = res.isLoggedIn;
            this.cdRef.detectChanges();  
        })
    }
}