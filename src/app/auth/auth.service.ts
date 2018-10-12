import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Login, Logout, Session} from './loginData';
import { Constants } from '../utils/Constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHandler } from '../utils/ErrorHandler';
import { RequestOptions, Headers } from '@angular/http';
import { catchError } from 'rxjs/operators';
import { StorageService } from './storageService';
  //import {Headers, RequestOptions} from 'angular2/http';


@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  private loginUrl = Constants.BASE_URL + 'loginController/login';
  private logoutUrl = Constants.BASE_URL + 'loginController/logout/';
  private secureEchoUrl = Constants.BASE_URL + 'Sdp/api/secure/echo/andrei';


  get isLoggedIn() {
    console.log("TOKEN:  " + this.getToken())

    if(this.getToken()){
      this.loggedIn.next(true);
    }
      return this.loggedIn.asObservable(); // {2}
      
  }

  public getToken(): string {
    return sessionStorage.getItem('token');
  }

  constructor(
    private router: Router,
    private http: HttpClient,
    private storageService: StorageService
  ) {}


  logout() {
    let email = sessionStorage.getItem('email');
    let token =  sessionStorage.getItem('token');


    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    console.log('headers' + headers.get('Content-Type'));
    this.http.post(this.logoutUrl, {email: email, token: token},  {headers: headers})
                    .subscribe(res =>  {
                    sessionStorage.setItem('token','');
                    sessionStorage.setItem('email','');
                    sessionStorage.setItem('role','');
                    this.loggedIn.next(false);
                    this.router.navigate(['/login']);
                });
  }

login(login: Login){
  console.log("User and password: "+ login);

  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  this.http.post(this.loginUrl, login,  {headers: headers})
                  .subscribe(res =>  {
                  if (JSON.stringify(res['code'])=="0"|| JSON.stringify(res['code'])=="2"){
                    console.log('SESION    ' + JSON.stringify(res['result']));


                    this.storageService.setItem('token', res['result'][0].token)
                    this.storageService.setItem('email', res['result'][0].email)
                    this.storageService.setItem('role', res['result'][0].roles[0].id)
                    this.loggedIn.next(true);
                    this.router.navigate(['/home']);

                  }
                  else {
                    alert("User doesn't exist")
                  }

              });
}



}
