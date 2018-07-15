import { Injectable } from '@angular/core';
import { ScclGlobalService, ScclNotifierService } from '../@scclShared/scclCommon/scclServices';
import { SCCL_ADMINISTRATOR_CONFIG } from './scclAdministrator.configuration';
import { ScclLayoutService } from '../@scclShared/scclLayout/scclLayoutServices/scclLayout.service';
import { IScclUser } from '../scclModels';

@Injectable()
export class ScclAdmininstratorService {

    constructor(
        private scclGlobalService: ScclGlobalService,
        private scclLayoutService: ScclLayoutService,
        private scclNotifier: ScclNotifierService) {
                    this.initializeModuleConfigurations();
        this.setCurrentUser();
        this.getUserMessages();
    }


    private setCurrentUser() {
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
        setTimeout(() => {
            this.scclNotifier.getAllNotification().forEach((msg) => {
                this.getNotificationContainer().push(msg);
            });
        }, 5000);
    }

    setPageTitle(pageTitle) {
        this.scclLayoutService.setPageTitle(pageTitle);
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
