import { Injectable } from '@angular/core';
import { Constants } from '../utils/Constants';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { ErrorHandler } from '../utils/ErrorHandler';
import { RequestOptions } from '@angular/http';
import { Session } from '../auth/loginData';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../models/User';
import {URLSearchParams} from '@angular/http';

@Injectable()
export class FileService {

  private fileListUrl = Constants.BASE_URL +  'documentController/listUserFiles';
  private downloadFileUrl = Constants.BASE_URL + 'documentController/download/';
  private downloadFileUrl2 = Constants.BASE_URL + 'documentController/downloadUserFiles/';

  //documentController/download/{fileID}/{email}/{token}
  //documentController//downloadUserFiles/{email}/{token}/{fileID}/
  constructor(private http:HttpClient) { }

  public userFilesList(email: string, token: string): Observable<any>{
    return this.http.post(this.fileListUrl + "?email=" + email + "&token=" + token , {responseType: 'text'}).pipe(
      catchError(new ErrorHandler().handleError('LoginService', null))
    );
  }

  public downloadFile(email: string, token: string, fileId: string): Observable<any>{
  //  console.log("Servicio " +email+token+fileId);
    let url=this.downloadFileUrl2 + fileId + "/" + email + "/" + token;
    console.log("Servicio " + url);
    return this.http.get(url).pipe(
      catchError(new ErrorHandler().handleError('LoginService', null))
    );
  }



//  http://localhost:8888/documentController/listUserFiles?email=sdptesttutor@gmail.com&token=EhQu0

}
