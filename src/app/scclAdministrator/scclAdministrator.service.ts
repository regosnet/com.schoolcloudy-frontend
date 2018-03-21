import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { ScclGlobalService } from "../@scclShared/scclCommon/scclServices/index";
import { SCCL_ADMINISTRATOR_CONFIG } from "./scclAdministrator.configuration";
import { TranslateService } from "@ngx-translate/core";

@Injectable()
export class ScclAdmininstratorService {
   
    constructor(private scclGlobalService: ScclGlobalService,
            private translate: TranslateService) {
        this.scclGlobalService.subscribe('bodyConfigs', (bodyConfigs) => {
            if(bodyConfigs !== undefined) {
                Object.keys(bodyConfigs).forEach((config) => {
                    this.scclGlobalService.notifyDataChanged(config, bodyConfigs[config]);
                })
            }
        })
         this.scclGlobalService.subscribe('selected.language', (language) => {
            this.translate.use(language);
        })
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
