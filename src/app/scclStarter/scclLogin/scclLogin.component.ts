import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScclLoginService } from './scclLogin.service';
import { IScclAnonymousUser } from '../../scclModels';


@Component({
    selector: 'sccl-login',
    templateUrl: './scclLogin.html',
    styleUrls: ['./scclLogin.scss'],
    providers: [ScclLoginService]
})
export class ScclLoginComponent implements AfterViewInit, OnInit {
    loginFormConfig;

    constructor(protected scclLoginService?: ScclLoginService) {}

    ngOnInit(): void {
<<<<<<< HEAD
        this.loginFormConfig = this.scclLoginService.getFormElements();
=======
        this.loginFormConfig = this.scclLoginService.displayLoginForm();
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
    }

    ngAfterViewInit(): void {
    }

    submitLoginForm(input_data: IScclAnonymousUser) {
        if (input_data.username !== null && input_data.password !== null) {
            if (this.scclLoginService.verifyAnonymousUser(input_data)) {
                this.scclLoginService.loginUser(input_data.username);
            }
        }
    }
}
