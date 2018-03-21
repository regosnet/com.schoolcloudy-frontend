import { Component, Input } from '@angular/core';

@Component({
    selector: 'sccl-card',
    templateUrl: './scclCard.html',
    styleUrls: ['./scclCard.scss']
})
export class ScclCardComponent {
    
    @Input()
    cardConfig
}