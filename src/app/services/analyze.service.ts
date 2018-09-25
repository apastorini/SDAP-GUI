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
export class AnalyzeService {

  private iniciarAnalisisUrl = Constants.BASE_URL +  'systemController/iniciarAnalisis/';
  private analisisListUrl = Constants.BASE_URL +  'systemController/listarAnalisisPorUsuario/';

  constructor(private http:HttpClient) { }

  public iniciarAnalisis(): Observable<any>{

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    let body = {
      "credentials": {
        "mail": "sdptesttutor@gmail.com",
        "password": "string",
        "roleDTOs": [
          {
            "desc": "string",
            "id": 0,
            "name": "string"
          }
        ],
        "token": sessionStorage.getItem('token')
      },
      "fileToAnalyze": 0,
      "filesToCompare": [
        0
      ],
      "finishDate": "2018-09-04T18:33:45.716Z",
      "idAnalize": 0,
      "initialDate": "2018-09-04T18:33:45.716Z",
      "terminado": true
    }
      return this.http.post(this.iniciarAnalisisUrl,body,{headers: headers});
      
  }

}
