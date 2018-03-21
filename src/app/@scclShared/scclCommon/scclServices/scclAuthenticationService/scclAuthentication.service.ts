import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SCCL_API_URL } from "../../scclContants/sccl.constants";

@Injectable()
export class ScclAuthenticationService {
    
    constructor(private _http: HttpClient) { 
    }
    
    public authUserLoginCredentials(data): Boolean {
        this.processRequest(data, 'login/check-get/user/credential').subscribe((res) => {
            console.log(res)
            if (res) {
                return true;
            }
        });
        return false;
    }
    
    public processRequest(data, uri: string): Observable<any>{
        const body = JSON.stringify(data);
        var headers = new HttpHeaders();
        return this._http.post(SCCL_API_URL + uri, data, this.prepareHeader(headers)); 
    }
    
    private prepareHeader(headers: HttpHeaders | null): object {
        headers = headers || new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Accept', 'application/json');
        return {
            headers: headers
        }
    }
}
   
 
     /*
      * 
      *  public processRequest(data:string, uri: string, headers?: HttpHeaders | null): Observable<any> {
        const body = JSON.stringify(data);
        return this._http.post(SCCL_API_URL + uri, body, this.prepareHeader()); 
    }
    
    private prepareHeader(): object {
        var headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');

        return {
            headers: headers
        }
}
     */   

/*
    .subscribe(
            response => {
                if (response.status === 204) {
                    this.loginMsg = true;
                }else {
                    if (response.status === 202) {
                        button.addClass('loading');
                        loginBtn.html('Authenticating');
                        spinner.addClass('spin');
                        setTimeout(() => {
                            if (response.json().user === 'Administrator') {
                                this._route.navigate(['/administrator']);
                            }
                        }, 1000);
                    }
                }
            },
            error => {
                console.log(error);
            }
    );
    
    
    
    
    import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/of';




  createPost() {
    this.newPost = this.http.post(this.ROOT_URL + '/bad-endpoint', data)
    
      .retry(3)
      .catch(err => {
        console.log(err)
        return Observable.of(err)
      })
  }
*/