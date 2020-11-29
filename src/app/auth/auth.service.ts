import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuth = false ;

  get userIsAuth(){
    return this._userIsAuth
  }

  constructor() { }

  logIn(){
    return this._userIsAuth = true;
  }
  logOut(){
    return this._userIsAuth = false;
  }

}
