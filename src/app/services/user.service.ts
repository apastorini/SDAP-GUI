import { Injectable } from '@angular/core';
import { Constants } from '../utils/Constants';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { LoginPayload } from './payload/LoginPayload';
import { ErrorHandler } from '../utils/ErrorHandler';
import { RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class UserService {

  private isUsedId = Constants.BASE_URL +  'loginController/isUsedId';
  private passwordByEmail = Constants.BASE_URL + 'loginController/sendPasswordByMail';
  private checkUserUrl = Constants.BASE_URL + 'loginController/isUsedId';
  private createUserUrl = Constants.BASE_URL + 'systemController/createUser';
  private modifyUserUrl = Constants.BASE_URL + 'systemController/modifyUser';
  private secureEchoUrl = Constants.BASE_URL + 'Sdp/api/secure/echo/andrei';
  private allUsersUrl = Constants.BASE_URL + 'systemController/listarUsuarios';
  private recuperarContraseniaUrl = Constants.BASE_URL + 'systemController/recuperarContrasenia';
  constructor(private http: HttpClient, private router: Router) { }

  public doLogin(payload: LoginPayload): Observable<any>{
    return this.http.post(this.checkUserUrl, payload, {responseType: 'text'}).pipe(
      catchError(new ErrorHandler().handleError('LoginService', null))
    );
  }

  public createUser(user: User){

    if (user.name !== '' && user.password !== '') { // {3}

        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.append('Access-Control-Allow-Origin','*');
        console.log('headers' + headers.get('Content-Type'));
        console.log('User los datos del usuairooooooooo  ::::::::::::::: ' + JSON.stringify(user));
        return this.http.post(this.createUserUrl+"?email=" + sessionStorage.getItem('email') + "&token=" + sessionStorage.getItem('token'), user, {headers: headers})
        //this.http.post(this.createUserUrl, user, {headers: headers})
           //.subscribe(respuesta =>JSON.stringify(console.log(respuesta)))
    }
  }

  public getAllUsers(){

    let skeleton = {
      "mail": "string",
      "password": "string",
      "roleDTOs": [
        {
          "desc": "string",
          "id": 0,
          "name": "string"
        }
      ],
      "token": "string"
    }

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers.append('Access-Control-Allow-Origin','*');
    console.log('headers' + headers.get('Content-Type'));
    return  this.http.post(this.allUsersUrl, skeleton, {headers: headers})
    //this.http.post(this.createUserUrl, user, {headers: headers})
       //.subscribe(respuesta =>JSON.stringify(console.log(respuesta))
  }



public recuperarContrasenia(email:string , token :string , password :string){
  console.log("EMAIL, TOKEN, PASSWORD:     " + email + "   " + token + "   " + password)

  let skeleton = {
    "email": email,
    "enable": true,
    "name": "string",
    "password": password,
    "passwordExpiredDate": "string",
    "passwordToken": token,
    "roles": [
      {
        "desc": "string",
        "id": 0,
        "name": "string"
      }
    ],
    "secondName": "string",
    "token": "string"
  }
  console.log("IMPORTANTE    TOKEN     " + skeleton.token)

  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  headers.append('Access-Control-Allow-Origin','*');
  console.log('headers' + headers.get('Content-Type'));
  return  this.http.post(this.recuperarContraseniaUrl, skeleton, {headers: headers})

}

  public modifyUser(user: User){
    console.log('1');
    if (user.name !== '' && user.password !== '') { // {3}

        console.log('2');
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.append('Access-Control-Allow-Origin','*');
        console.log('headers' + headers.get('Content-Type'));
        return  this.http.post(this.modifyUserUrl+"?email=" + sessionStorage.getItem('email') + "&token=" + sessionStorage.getItem('token'), user, {headers: headers})
        //this.http.post(this.createUserUrl, user, {headers: headers})
           //.subscribe(respuesta =>JSON.stringify(console.log(respuesta)))
    }
  }



  public exist(email: string){
    let params = new HttpParams().set('email', email);
    params.append('email', email);
    return this.http.get(this.checkUserUrl, {params:params})
      .map(res =>{console.log("exist----> "+res)});
      //.map(res =>{return res});
      //.subscribe(res =>{console.log(res)});
      //.subscribe(res =>{return res});
  }

  public doSecureEcho(authToken: string): Observable<any>{
    let httpParams = new HttpParams()
        .append("mail", "test@test.com")
        .append("password", "Password1")
    let headers = new HttpHeaders();
    headers = headers.set('x-auth-token', authToken);
    headers = headers.append('Content-Type', 'text/xml');
    return this.http.get(this.secureEchoUrl, {headers: headers,responseType: 'text'}).pipe(
      catchError(new ErrorHandler().handleError('LoginService', null))
    );
  }


}
