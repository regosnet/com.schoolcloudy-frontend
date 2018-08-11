<<<<<<< HEAD
import { Injectable, HostListener } from '@angular/core';
=======
import { Injectable } from '@angular/core';
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
import { Router } from '@angular/router';
import { ScclAuthenticationService, ScclGlobalService } from '../../@scclShared/scclCommon/scclServices';
import { scclContants } from '../../@scclShared/scclCommon/scclContants/sccl.constants';



@Injectable()
export class ScclLoginService {

<<<<<<< HEAD
    constructor(
        private scclAuthService: ScclAuthenticationService,
        private scclGlobalService: ScclGlobalService,
        private _route: Router) {
            this.logoutUser();
            this.loginBtnListener();
    }

    /* Displays login form on main route */
    loginBtnListener() {
        this.scclGlobalService.subscribe('login-btn', (e) => {
            this.displayLogin('login');
        })
    }

    displayLogin(path: string) {
        this._route.navigate([path]);
    }

    getFormElements() {
=======
    constructor(private scclAuthService: ScclAuthenticationService,
                private scclGlobalService: ScclGlobalService,
                private _route: Router) {
            this.logoutUser();
    }

    displayLoginForm() {
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
        return [
            {
                formElements: [
                      {title: 'username', type: 'text', icon: 'user', label: 'sccl.login.username'},
                      {title: 'password', type: 'password', icon: 'lock', label: 'sccl.login.password'}
               ]
            },
            {
<<<<<<< HEAD
                buttonElements: {
                    buttons: [
                        {
                            title: 'sccl.login.title',
                            id: 'login-btn',                           
                            tool_tip: {
                              title: 'sccl.login.title',
                              d_p: 'buttom'
                            }
                        },
                    ]
                }
=======
                buttonElements: [
                    {
                        title: 'sccl.login.title',
                        tool_tip: {
                          title: 'sccl.login.title',
                          d_p: 'buttom'
                        }
                    },
                 ]
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
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
<<<<<<< HEAD
        localStorage.setItem(scclContants.usr_key, tc_u);
        localStorage.setItem('isLoggedIn', 'loggedIn');
    }
=======
        console.log('Login checking');
        localStorage.setItem(scclContants.usr_key, tc_u);
        localStorage.setItem('isLoggedIn', 'loggedIn');
    }

>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
}
