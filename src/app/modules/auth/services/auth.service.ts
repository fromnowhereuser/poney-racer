import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged = false;

  constructor() { }


  public login() {
    this.isLogged = true;
  }
}
