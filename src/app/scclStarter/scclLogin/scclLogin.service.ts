import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ScclAuthenticationService, ScclGlobalService } from '../../@scclShared/scclCommon/scclServices';
import { scclContants } from '../../@scclShared/scclCommon/scclContants/sccl.constants';



@Injectable()
export class ScclLoginService {

    constructor(private scclAuthService: ScclAuthenticationService,
                private scclGlobalService: ScclGlobalService,
                private _route: Router) {
            this.logoutUser();
    }

    displayLoginForm() {
        return [
            {
                formElements: [
                      {title: 'username', type: 'text', icon: 'user', label: 'sccl.login.username'},
                      {title: 'password', type: 'password', icon: 'lock', label: 'sccl.login.password'}
               ]
            },
            {
                buttonElements: {
                    buttons: [
                        {
                            title: 'sccl.login.title',
                            tool_tip: {
                              title: 'sccl.login.title',
                              d_p: 'buttom'
                            }
                        },
                    ]
                }
            }
         ];
    }

    loginUser(tc_u) {
        this._route.navigate(['administrator']);
        localStorage.setItem('isUser', 'loggedIn');
    }

    logoutUser() {
        this._route.events.subscribe((res) => {
            if (this._route.url === '/') {
                this.scclGlobalService.notifyDataChanged('isLoggedIn', false);
                /*localStorage.removeItem('isLoggedIn');*/
            }
        });
    }

    verifyAnonymousUser(input_data) {
        console.log(this.scclAuthService.handleAuthentication(input_data)
        .subscribe());
        return true;
    }

    private notifyUserIsLoggedIn(tc_u) {
        console.log('Login checking');
        localStorage.setItem(scclContants.usr_key, tc_u);
        localStorage.setItem('isLoggedIn', 'loggedIn');
    }

}
