import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {map} from 'rxjs/operators';

import { RequestOptions, ResponseContentType } from '@angular/http';

@Injectable()
export class DriveResource {
    private readonly API_URL: string = 'https://www.googleapis.com/drive/v2';

    constructor(private httpClient: HttpClient) {
    }

    public getFileList(authtoken:string):Observable<any> {

      return this.httpClient.get(this.API_URL + '/files', {
          headers: new HttpHeaders({
                Authorization: `Bearer ${authtoken}`
            })
        }) ;
    }

    public downloadFileById(authtoken:string , downloadURL:string):Observable<any>  {
      return this.httpClient.get(downloadURL, {
        headers: new HttpHeaders({
          Authorization: `Bearer ${authtoken}`
        })
      });

    }


}
