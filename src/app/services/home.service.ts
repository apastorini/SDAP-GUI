import { Injectable } from '@angular/core';
import { Constants } from '../utils/Constants';
import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import { ErrorHandler } from '../utils/ErrorHandler';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HomeService {

  private dashBoardUrl = Constants.BASE_URL + 'systemController/getDashBoard';

  constructor(
    private http: HttpClient
  ) { }


getDashBoard(email: string, token: string): Observable<any>{
  return this.http.post(this.dashBoardUrl + "?email=" + email + "&token=" + token , {responseType: 'text'})
  //.pipe(catchError(new ErrorHandler().handleError('LoginService', null)));
}

}
