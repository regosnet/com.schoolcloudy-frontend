import { Component, AfterViewInit, OnInit, OnChanges, Input } from '@angular/core';
import { ScclAsideMenuComponent } from '../scclAsideMenu';

declare var $: any;

@Component({
    selector: 'sccl-left-menu-bar',
    templateUrl: './scclLeftMenuBar.html',
    styleUrls: ['./scclLeftMenuBar.scss']
})
export class ScclLeftMenuBarComponent extends ScclAsideMenuComponent {
}
