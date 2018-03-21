import { Component, AfterViewInit, ChangeDetectorRef, ViewContainerRef, ViewChild } from '@angular/core';
import { ScclAuthenticationService, ScclGlobalService } from '../../scclCommon/scclServices';
import { Router } from '@angular/router';
import { ScclHomeService } from '../../../scclHome/scclHome.service';
import { ScclLayoutService } from '../../scclLayout/scclLayout.service';
import { ScclLoginService } from './scclLogin.service';


@Component({
    selector: 'sccl-login',
    templateUrl: './scclLogin.html',
    styleUrls: ['./scclLogin.scss'],
    providers: [ScclLoginService]
})
export class ScclLoginComponent implements AfterViewInit {
    loginFormConfig = [
                                        {
                                            formElements: [
                                                  {title: 'sccl.login.username', type: 'text', icon: 'user'},
                                                  {title: 'sccl.login.password', type: 'password', icon: 'lock'}
                                           ]
                                        },
                                        {
                                            buttonElements: [
                                                   {title: 'sccl.login.title', type: 'button'}
                                             ]
                                        }
                                     ];

    constructor(private scclGlobalService: ScclGlobalService,
                private cdRef: ChangeDetectorRef,
                private scclLoginService: ScclLoginService,
                private scclAuth: ScclAuthenticationService,
                private _route: Router) {
    }

    ngAfterViewInit(): void {
    }

    submitLoginForm(data) {
        if (data.username !== null) {
            this.scclAuth.authUserLoginCredentials(data);
            this._route.navigate(['/administrator']);
            this.scclGlobalService.notifyDataChanged('isLoggedIn', {isLoggedIn: true});
        }
    }
}
