import {
    Component,
    AfterViewInit,
    OnInit
} from '@angular/core';
import {
    SCCL_STARTER_CONFIG
} from './scclStarter.configuration';
import { ScclStarterService } from './scclStarter.service';

@Component({
    selector: 'sccl-starter',
    templateUrl: './scclStarter.html',
    styleUrls: ['./scclStarter.scss']
})
export class ScclStarterComponent implements OnInit {

    constructor(private scclStarterService: ScclStarterService) {
    }

    ngOnInit(): void {
    }
}
