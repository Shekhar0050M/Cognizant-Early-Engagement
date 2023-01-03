import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean;


  login(): void{
    this.loggedIn = true;
  }
  logout(): void{
    this.loggedIn = false;
  }
  isLoggedIn(): boolean{
    return this.loggedIn;
  }
}
