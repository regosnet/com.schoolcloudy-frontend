import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ScclGlobalService } from '../../scclCommon/scclServices';


@Component({
    selector: 'sccl-news-feed',
    templateUrl: './scclNewsFeed.html',
    styleUrls: ['./scclNewsFeed.scss']
})
export class ScclNewsFeedComponent implements AfterViewInit, OnInit {

    constructor(private scclGlobalService: ScclGlobalService) {

    }
    ngOnInit() {
        this.scclGlobalService.notifyDataChanged('active-page.title', 'sccl.news_feed');
    }
    ngAfterViewInit(): void {
    }
}
