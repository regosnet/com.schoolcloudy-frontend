<<<<<<< HEAD
import { Component, Input, OnChanges, ChangeDetectionStrategy, OnDestroy, AfterViewInit} from '@angular/core';
=======
import { Component, Input, AfterViewInit, ChangeDetectorRef, OnChanges} from '@angular/core';
import { ScclGlobalService } from '../../scclServices';
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
declare var $: any;

@Component({
    selector: 'sccl-tab',
    templateUrl: './scclTab.html',
    styleUrls: ['./scclTab.scss']
})
<<<<<<< HEAD
export class ScclTabComponent implements OnChanges, AfterViewInit{
    @Input() tab;

    @Input()
    height

    constructor() {
        
=======
export class ScclTabComponent implements AfterViewInit, OnChanges {
    @Input() tab;
    winHeight = window.innerHeight;

    constructor(private scclGlobalService: ScclGlobalService,
        private cdRef: ChangeDetectorRef) {
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
    }
    ngAfterViewInit(): void {
        setTimeout(() => {
            $('ul.tabs').tabs();
<<<<<<< HEAD
        }, 50);
    }

    ngOnChanges(): void {
       
=======
        }, 300);
    }

    ngOnChanges(): void {
        this.scclGlobalService.subscribe('screen-dimension', (windowHeight) => {
              this.winHeight = windowHeight.height;
              this.cdRef.detectChanges();
          });
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
    }

}
