import { Injectable } from '@angular/core';
import { Constants } from '../utils/Constants';
import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import { ErrorHandler } from '../utils/ErrorHandler';
import { RequestOptions } from '@angular/http';
import { Session } from '../auth/loginData';
import { ResponseContentType,RequestMethod } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../models/User';
import {URLSearchParams} from '@angular/http';

@Injectable()
export class FileService {

  private fileListUrl = Constants.BASE_URL +  'documentController/listUserFiles';
  private sharedFilesUrl = Constants.BASE_URL + 'documentController/listSharedFiles/';
  private downloadFileUrl = Constants.BASE_URL + 'documentController/downloadUserFiles/';

  //documentController/download/{fileID}/{email}/{token}
  //documentController//downloadUserFiles/{email}/{token}/{fileID}/
  constructor(private http:HttpClient) { }

  public userFilesList(email: string, token: string): Observable<any>{
    return this.http.post(this.fileListUrl + "?email=" + email + "&token=" + token , {responseType: 'text'}).pipe(
      catchError(new ErrorHandler().handleError('LoginService', null))
    );
  }
  public getSharedFiles(email: string, token: string): Observable<any>{
    return this.http.post(this.sharedFilesUrl + "?email=" + email + "&token=" + token , {responseType: 'text'}).pipe(
      catchError(new ErrorHandler().handleError('LoginService', null))
    );
  }



  // public downloadFile(email: string, token: string, fileId: string): Observable<any>{
  //   let url = this.http.get(this.downloadFileUrl + "?email=" + email + "&token=" + token + "&fileID=" + fileId)
  //   console.log("url " + JSON.stringify(url))
  //
  //   return this.http.get(this.downloadFileUrl + "?email=" + email + "&token=" + token + "&fileID=" + fileId).pipe(
  //     catchError(new ErrorHandler().handleError('LoginService', null))
  //   );
  // }



  downloadFile(email: string, token: string, fileId: string) { //get file from service
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    let url = this.downloadFileUrl + "?email=" + email + "&token=" + token + "&fileID=" + fileId
    return this.http.get(url,{ headers: headers, responseType: 'blob' })
  }





//  http://localhost:8888/documentController/listUserFiles?email=sdptesttutor@gmail.com&token=EhQu0

}
