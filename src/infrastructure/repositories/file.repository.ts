import { Injectable } from "@angular/core";
import { FileInfo, MIME_TYPE_FOLDER } from "../../model/fileInfo";
declare var UploaderForGoogleDrive;
import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FileRepository {

  private downloadFileGoogleUrl = 'https://www.googleapis.com/drive/v3/files/';
  constructor(private http:HttpClient) { }

    create(parentId: string, folderName: string) {
        var folder = {
            name: folderName,
            mimeType: MIME_TYPE_FOLDER,
            parents: [parentId]
        };
        return gapi.client.drive.files.create({
            //resource: folder,
            fields: "id, name, mimeType, modifiedTime, size"
        }).then((res) => {
            return FileInfo.fromGoogleFile(res.result);
        });
    }

    delete(fileId: string) {
        return gapi.client.drive.files.delete({
            fileId: fileId
        });
    }
    getFiles(folderId: string) {
        return gapi.client.drive.files.list({
            pageSize: 100,
            fields: "nextPageToken, files(id, name, mimeType, modifiedTime, size)",
            q: `'${folderId}' in parents and trashed = false`
        }).then((res) => {
            let files: FileInfo[] = [];
            res.result.files.forEach((file) => files.push(FileInfo.fromGoogleFile(file)));
            return files;
        });
    }

    importFile(parentId: string, file: FileInfo, onError: any, onComplete: any, onProgress: any) {
        var contentType = file.Blob.type || 'application/octet-stream';
        var metadata = {
            name: file.Blob.name,
            mimeType: contentType,
            parents: [parentId]
        };

        var uploader = new UploaderForGoogleDrive({
            file: file.Blob,
            token: gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token,
            metadata: metadata,
            onError: onError,
            onComplete: onComplete,
            onProgress: onProgress,
            params: {
                convert: false,
                ocr: false
            }

        });

        uploader.upload();
    }

    // downloadFileGoogle(fileId: string) { //get file from service
    //   let headers = new HttpHeaders();
    //   headers = headers.set('Accept', 'application/pdf');
    //   let url = this.downloadFileGoogleUrl + fileId + "?alt=media"
    //   console.log("URL  :  " + url);
    //   return this.http.get(url,{ headers: headers, responseType: 'blob' })
    // }

    //import { Http, Headers, Response } from '@angular/http';

  downloadFileGoogle(fileId: string) : Observable<any> { //get file from service
      console.log("my token experiment:  " + JSON.stringify(gapi.auth.getToken().access_token));
        let headers = new HttpHeaders({
          'Content-Type': 'application/pdf',
          'Authorization': 'Bearer' + ' ' + gapi.auth.getToken().access_token
        })
        console.log("FLAG 1");
        let url = this.downloadFileGoogleUrl + fileId + "?alt=media";
        console.log("FLAG 2");
        return this.http.get(url, { headers: headers,responseType: 'blob'})
      }




}
