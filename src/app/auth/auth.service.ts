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
    console.log("CHauuuuuuu"+ JSON.stringify(sessionStorage.getItem('email')))
    //logout.token = sessionStorage.getItem('token');

    console.log("Csd "+ sessionStorage.getItem('email'))
    let email = sessionStorage.getItem('email');
    let token =  sessionStorage.getItem('token');


    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    console.log('headers' + headers.get('Content-Type'));
    this.http.post(this.logoutUrl, {email: email, token: token},  {headers: headers})
                    .subscribe(res =>  {
                    console.log("CHauuuuuuu"+ JSON.stringify(res))

                    sessionStorage.setItem('token','');
                    sessionStorage.setItem('email','');
                    sessionStorage.setItem('role','');
                    this.loggedIn.next(false);
                    this.router.navigate(['/login']);

                    console.log("email "+ sessionStorage.getItem('email'))
                    console.log("token "+ sessionStorage.getItem('token'))

                });
  }

login(login: Login){
  //let headers = new HttpHeaders()
  //headers = headers.set('Content-Type', 'application/json');

  console.log("User and password: "+ login);

  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  //let body = JSON.stringify({"mail": " + login.userName + ","password": "login.passWord"});

  console.log('headers' + headers.get('Content-Type'));
  this.http.post(this.loginUrl, login,  {headers: headers})
                  .subscribe(res =>  {
                      console.log('pruebba  ' + JSON.stringify(res));
//
                  if (JSON.stringify(res['code'])=="0"|| JSON.stringify(res['code'])=="2"){
                    console.log('SESION    ' + JSON.stringify(res['result']));
                    //console.log('SESION Robar   ' + JSON.stringify(res['result'][0].token));
                    //console.log('SESION    ' + this.sesion.token);


                      this.storageService.setItem('token', res['result'][0].token)
                      this.storageService.setItem('email', res['result'][0].email)
                      this.storageService.setItem('role', res['result'][0].roles[0].id)
                    // this.session.token = res['result'][0].token;
                    // this.session.email = res['result'][0].email;
                    // this.session.role = res['result'][0].roles[0].id;

                    //let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
                    // sessionStorage.setItem('token',res['result'][0].token);
                    // sessionStorage.setItem('email',res['result'][0].email);
                    // sessionStorage.setItem('role',res['result'][0].roles[0].id);

                    //sessionStorage.setItem('password',this.sesion.password);
                    console.log('role    ' + sessionStorage.getItem('role'));



                      // console.log('TOOOKEN    ' + sessionStorage.getItem('token'));
                      // console.log('EMAIL    ' + sessionStorage.getItem('email'));
                      // console.log('ROLES    ' + sessionStorage.getItem('role'));
                    //sessionStorage.setItem('userID',currentUser.userID);
                    this.loggedIn.next(true);
                    this.router.navigate(['/home']);

                  }
                  else {
                    alert("User doesn't exist")
                  }

              });
                  //  .map(res => {
}



}
