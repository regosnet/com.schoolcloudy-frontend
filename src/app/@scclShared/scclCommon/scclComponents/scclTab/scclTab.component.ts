import { Component, Input, AfterViewInit, ChangeDetectorRef, OnChanges} from '@angular/core';
import { ScclGlobalService } from '../../scclServices';
declare var $: any;

@Component({
    selector: 'sccl-tab',
    templateUrl: './scclTab.html',
    styleUrls: ['./scclTab.scss']
})
export class ScclTabComponent implements AfterViewInit, OnChanges {
    @Input() tab;
    winHeight = window.innerHeight;

    constructor(private scclGlobalService: ScclGlobalService,
        private cdRef: ChangeDetectorRef) {
    }

    ngAfterViewInit() {
        setTimeout(() => {
            $('ul.tabs').tabs();
        }, 300);
    }

    ngOnChanges(): void {
        this.scclGlobalService.subscribe('screen-dimension', (windowHeight) => {
              this.winHeight = windowHeight.height;
              this.cdRef.detectChanges();
          });
    }
}
