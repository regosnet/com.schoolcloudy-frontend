import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { ScclButton } from '../scclButton';

@Component({
    selector: 'sccl-link-button',
    templateUrl: './scclLinkButton.html',
    styleUrls: ['./scclLinkButton.scss']
})
export class ScclLinkButtonComponent extends ScclButton implements AfterViewInit { 
    
}
