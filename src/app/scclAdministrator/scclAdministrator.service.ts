import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { ScclGlobalService, ScclNotifierService } from '../@scclShared/scclCommon/scclServices';
=======
import { ScclGlobalService, ScclMessageService } from '../@scclShared/scclCommon/scclServices';
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
import { SCCL_ADMINISTRATOR_CONFIG } from './scclAdministrator.configuration';
import { ScclLayoutService } from '../@scclShared/scclLayout/scclLayoutServices/scclLayout.service';
import { IScclUser } from '../scclModels';

@Injectable()
export class ScclAdmininstratorService {

<<<<<<< HEAD
    constructor(
        private scclGlobalService: ScclGlobalService,
        private scclLayoutService: ScclLayoutService,
        private scclNotifier: ScclNotifierService) {
=======
    constructor(private scclGlobalService: ScclGlobalService,
                private scclLayoutService: ScclLayoutService,
                private scclMessageService: ScclMessageService) {
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
                    this.initializeModuleConfigurations();
        this.setCurrentUser();
        this.getUserMessages();
    }


    private setCurrentUser() {
<<<<<<< HEAD
=======
        this.scclGlobalService.notifyDataChanged('isLoggedIn', true);
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
        this.scclGlobalService.notifyDataChanged('isUser', this.getUser());
    }

    getUser(): IScclUser {
        return {
            firstName: 'Eric',
            lastName: 'Ihechukwudere'
        };
    }

    initializeModuleConfigurations() {
       this.scclGlobalService.notifyDataChanged('module.configurations', SCCL_ADMINISTRATOR_CONFIG);
    }

    getUserMessages() {
<<<<<<< HEAD
        setTimeout(() => {
            this.scclNotifier.getAllNotification().forEach((msg) => {
                this.getNotificationContainer().push(msg);
            });
        }, 5000);
=======
        this.scclGlobalService.notifyDataChanged('message.instant', this.scclMessageService.getInstantMessages());
        this.scclGlobalService.notifyDataChanged('message.notification', this.scclMessageService.getNotificationMessages());
        this.scclGlobalService.notifyDataChanged('message.inbox', this.scclMessageService.getInboxMessages());
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
    }

    setPageTitle(pageTitle) {
        this.scclLayoutService.setPageTitle(pageTitle);
<<<<<<< HEAD
    }

    notifyUserStatus() {
        this.scclGlobalService.notifyDataChanged('isLoggedIn', true);
    }

    getNotificationContainer() {
        return SCCL_ADMINISTRATOR_CONFIG
                .headConfig
                .mainHeadConfig
                .notifierConfig
                .itemsContainer;
=======
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
    }
/*
    public getAdministrator() {
        const body = JSON.stringify({internalId: 3, externalId: 'SMD454'});
        const headers = new Headers();
        headers.append('Content-Type', 'application/json' );
        return this._http.post('http://localhost:8080/schoolcloudy/school/administrator/get/administrator/username',
                body, {headers: headers});
    }

    public getAdministrators() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json' );
        return this._http.get('http://localhost:8080/schoolcloudy/school/administrator/get/all/administrators');
    }

    public getStudents() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json' );
        return this._http.get('http://localhost:8080/schoolcloudy/school/administrator/get/all/students', {headers: this.getHeaders()})
        ._catch((err) => {
            console.log('SERVER IS DOWN' + err);
            return Observable.throw(err);
        });
    }

    private getHeaders() {
        // I included these headers because otherwise FireFox
        // will request text/html instead of application/json
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
      }*/
}
