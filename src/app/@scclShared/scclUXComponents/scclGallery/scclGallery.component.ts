import { Component, OnInit } from '@angular/core';
import { ScclGlobalService } from '../../scclCommon/scclServices';

@Component({
    selector: 'sccl-gallery',
    templateUrl: './scclGallery.html',
    styleUrls: ['./scclGallery.scss']
})
export class ScclGalleryComponent implements OnInit {

    constructor(private scclGlobalService: ScclGlobalService) {

    }
    ngOnInit(): void {
        this.scclGlobalService.notifyDataChanged('active-page.title', 'sccl.gallery');
    }
}
