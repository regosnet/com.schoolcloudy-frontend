import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class ScclAuthGuard implements CanActivate {
    constructor( private _route: Router) {
    }
    canActivate(): boolean {
        if (localStorage.getItem('isUser') === 'loggedIn') {
            return true;
        }
        this._route.navigate(['/']);
        return false;
    }
}
