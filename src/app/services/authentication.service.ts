import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginPayload } from './payload/LoginPayload';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Constants } from '../utils/Constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHandler } from '../utils/ErrorHandler';
import { RequestOptions } from '@angular/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  //  public token: string;

    private checkUserUrl = Constants.BASE_URL + 'Sdp/api/public/auth';
    private secureEchoUrl = Constants.BASE_URL + 'Sdp/api/secure/echo/andrei';
    private loggedIn = new BehaviorSubject<boolean>(false); // {1}

    constructor(private router: Router, private http: HttpClient) {
        // set token if saved in local storage
    }

    get isLoggedIn() {
     return this.loggedIn.asObservable(); // {2}
   }

   login(user: LoginPayload){
    if (user.userName !== '' && user.passWord !== '' ) { // {3}
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

  logout() {                            // {4}
         this.loggedIn.next(false);
         this.router.navigate(['/login']);
       }

  doLogin(payload: LoginPayload): Observable<any>{
    return this.http.post(this.checkUserUrl, payload, {responseType: 'text'}).pipe(
      catchError(new ErrorHandler().handleError('LoginService', null))
    );
  }
  

  doSecureEcho(authToken: string): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('x-auth-token', authToken);
    headers = headers.append('Content-Type', 'text/xml');
    return this.http.get(this.secureEchoUrl, {headers: headers,responseType: 'text'}).pipe(
      catchError(new ErrorHandler().handleError('LoginService', null))
    );
  }




}
