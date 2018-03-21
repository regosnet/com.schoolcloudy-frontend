import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ScclGlobalService } from './@scclShared/scclCommon/scclServices/index';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { ScclMainService } from './scclMain.service';

@Component({
  selector: 'sccl-root',
  templateUrl: './scclMain.component.html',
  styleUrls: ['./scclMain.component.scss']
})
export class ScclMainComponent {

  constructor(private scclMainService: ScclMainService) {}
}
