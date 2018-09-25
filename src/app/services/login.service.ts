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
import {URLSearchParams} from '@angular/http';

@Injectable()
export class LoginService {
  private isUsedId = Constants.BASE_URL +  'loginController/isUsedId';
  private passwordByEmail = Constants.BASE_URL + 'loginController/sendPasswordByMail';
  private checkUserUrl = Constants.BASE_URL + 'loginController/isUsedId';
  private createUserUrl = Constants.BASE_URL + 'systemController/createUser';
  private secureEchoUrl = Constants.BASE_URL + 'Sdp/api/secure/echo/andrei';
  constructor(private http: HttpClient, private router: Router) { }

  public doLogin(payload: LoginPayload): Observable<any>{
    return this.http.post(this.checkUserUrl, payload, {responseType: 'text'}).pipe(
      catchError(new ErrorHandler().handleError('LoginService', null))
    );
  }

//prototypeoneb@gmail.com
  public signin(user: User){

    if (user.name !== '' && user.password !== '') { // {3}
      console.log("ENTRO"+ user.name);

        let bool=  this.exist(user.email);

          if (!this.exist(user.email)){
            console.log("ENTRO"+ user);
            //prototypeoneb@gmail.com

            //this.http.post(this.checkUserUrl, user, {responseType: 'text'}).subscribe(respuesta =>this.manageLoginResponse(respuesta));
            this.http.post(this.createUserUrl, user, {responseType: 'text'})
              .subscribe(respuesta =>localStorage.setItem('currentUser', JSON.stringify({ token: respuesta })))

            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            localStorage.setItem('token',currentUser.token);
            localStorage.setItem('userName',currentUser.name);
            //localStorage.setItem('userID',currentUser.userID);

            this.router.navigate(['/home']);
          }
          else{
              console.log("NO EXISTIO: "+user.email);
          }
    }
  }




  public exist(email: string){
    console.log(this.checkUserUrl);
    let params = new HttpParams().set('email', email);
    params.append('email', email);
    console.log("paramsssss= " + params);

    return this.http.get(this.checkUserUrl, {params:params})
      .subscribe(respuesta =>{return respuesta});
  }

  public doSecureEcho(authToken: string): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('x-auth-token', authToken);
    headers = headers.append('Content-Type', 'text/xml');
    return this.http.get(this.secureEchoUrl, {headers: headers,responseType: 'text'}).pipe(
      catchError(new ErrorHandler().handleError('LoginService', null))
    );
  }



getIsUsedId(eMail: string): boolean{
  if (eMail!== '') { // {3}

        console.log("email: "+ eMail);
        //this.http.post(this.checkUserUrl, user, {responseType: 'text'}).subscribe(respuesta =>this.manageLoginResponse(respuesta));
        this.http.post(this.passwordByEmail, eMail, {responseType: 'text'})
          .subscribe(respuesta =>localStorage.setItem('currentUser', JSON.stringify({ token: respuesta })))
        //localStorage.setItem('userID',currentUser.userID);
        return true;
  }
}


recuperarPassword(eMail: string){
  if (eMail!== '') { // {3}

        console.log("email: "+ eMail);

        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'text/xml');
        //this.http.post(this.checkUserUrl, user, {responseType: 'text'}).subscribe(respuesta =>this.manageLoginResponse(respuesta));
        this.http.get(this.passwordByEmail)
          .subscribe(res => alert("eMail Enviado"))
        //localStorage.setItem('userID',currentUser.userID);
  }
}


 getPasswordByEmail(eMail: string ){
    if (eMail!== '') { // {3}

          console.log("email: "+ eMail);
          //this.http.post(this.checkUserUrl, user, {responseType: 'text'}).subscribe(respuesta =>this.manageLoginResponse(respuesta));
          this.http.post(this.passwordByEmail, eMail, {responseType: 'text'})
            .subscribe(respuesta =>localStorage.setItem('currentUser', JSON.stringify({ token: respuesta })))
          //localStorage.setItem('userID',currentUser.userID);

          this.router.navigate(['/home']);

    }
  }

}
