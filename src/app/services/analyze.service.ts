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
  private obtenerResultadoAnalisisUrl = Constants.BASE_URL +  'systemController/reporteAnalisis';


  constructor(private http:HttpClient) { }

  public iniciarAnalisis(fileToAnalize, corpus): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    let body = {
      "credentials": {
        "mail": sessionStorage.getItem('email'),
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
      "fileToAnalyze": fileToAnalize,
      "filesToCompare": corpus,
      "finishDate": "2018-09-04T18:33:45.716Z",
      "idAnalize": 0,
      "initialDate": "2018-09-04T18:33:45.716Z",
      "terminado": true
    }
      return this.http.post(this.iniciarAnalisisUrl,body,{headers: headers});

  }

  // public getReportList(): Observable<any>{
  //   return this.http.post(this.obtenerResultadoAnalisisUrl + "?email=" + sessionStorage.getItem('email') + "&token=" + sessionStorage.getItem('token') , {responseType: 'text'}).pipe(
  //     catchError(new ErrorHandler().handleError('LoginService', null))
  //   );
  // }

  public listarAnalisisPorUsuario(): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    let body = {
      "mail": sessionStorage.getItem('email'),
      "password": "string",
      "roleDTOs": [
        {
          "desc": "string",
          "id": 0,
          "name": "string"
        }
      ],
      "token": sessionStorage.getItem('token')
    }
      return this.http.post(this.analisisListUrl,body,{headers: headers});

  }

  reporteAnalisis(email: string, token: string, idAnalisis: string) { //get file from service
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    let url = this.obtenerResultadoAnalisisUrl + "?email=" + email + "&token=" + token + "&idAnalisis=" + idAnalisis
    return this.http.get(url,{ headers: headers, responseType: 'blob' })
  }


}
