import {
    Component,
    AfterViewInit,
<<<<<<< HEAD
    OnInit,
    ChangeDetectorRef
=======
    OnInit
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
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
<<<<<<< HEAD
        this.scclStarterService.notifyUserStatus();
=======
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
    }
}
