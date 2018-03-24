import { Component, Input, OnInit} from '@angular/core';
import { ScclGlobalService } from '../../../../scclCommon/scclServices/index';

@Component({
    selector: 'sccl-top-head',
    templateUrl: './scclTopHead.html',
    styleUrls: ['./scclTopHead.scss']
})
export class ScclTopHeadComponent implements OnInit {

    @Input()
    isLoggedIn: boolean;
    week: string;
    semester: string;
    today: Date;
    day: string;
    date: number;
    month: string;
    year: number;
    academicWeek: number;
    schoolSemester: number;
    lastLogin: string;
    dateLastLogin = '12/01/2017';

    ngOnInit(): void {
        this.today = new Date();
        this.day = 'sccl.calendar.day.' + this.today.getDay();
        this.month = 'sccl.calendar.month.' + this.today.getMonth();
        this.date = this.today.getDate();
        this.year = this.today.getFullYear();
        this.week = 'sccl.calendar.week';
        this.semester = 'sccl.calendar.semester';
        this.lastLogin = 'sccl.login.lastLogin';
        this.scclGlobalService.subscribe('academicSession', (academicSession) => {
            this.academicWeek = academicSession.week;
            this.schoolSemester = academicSession.semester;
        });
    }

    constructor(private scclGlobalService: ScclGlobalService) {

    }
}
