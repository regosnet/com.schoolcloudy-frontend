import { Component, AfterViewInit, ChangeDetectorRef, OnInit, OnChanges, Input } from '@angular/core';
import { ScclGlobalService } from '../../scclCommon/scclServices/index';
import { ScclLayoutService } from '../scclLayoutServices/scclLayout.service';
import { unescapeIdentifier } from '@angular/compiler';
import { IScclHeader, IScclMainHeadbar } from '../../../scclModels';
declare var $: any;



@Component({
    selector: 'sccl-header',
    templateUrl: './scclHeader.html',
    styleUrls: ['./scclHeader.scss']
})
export class ScclHeaderComponent implements AfterViewInit, OnInit, OnChanges {
    isLoggedIn: Boolean;
    @Input()
    headConfig: IScclHeader;
    mainHeadConfig: IScclMainHeadbar;
    topHeadConfig;
    ngOnInit(): void {
    }

    constructor(
        private scclGlobalService: ScclGlobalService,
        private cdRef: ChangeDetectorRef,
        private scclLayoutService: ScclLayoutService) {
    }

    ngAfterViewInit(): void {
        this.scclGlobalService.subscribe('isLoggedIn', (isLoggedIn) => {
            this.isLoggedIn = isLoggedIn;
            this.cdRef.detectChanges();
       });
    }

    ngOnChanges(): void {
        if (this.headConfig !== undefined) {
            this.mainHeadConfig = this.headConfig.mainHeadConfig;
        }
    }
}
