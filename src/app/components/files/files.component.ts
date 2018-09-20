import { Component, OnInit } from '@angular/core';
import { Constants } from '../../utils/Constants';
import { FileService } from '../../services/file.service';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Session } from '../../auth/loginData';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})

export class FilesComponent implements OnInit {
  fileList = [];
  porcentaje = '';
  public uploadFile = Constants.BASE_URL +  'documentController/addFileToUser';
  selectedFile: File = null;

  constructor(
    private http: HttpClient,
    private fileService: FileService
  ){}

  onFileSelected(event){
    this.selectedFile = <File> event.target.files[0];

  }

  onUpload(){
    if(this.selectedFile == null){
      alert('Archivo no seleccionado');

    }
    else{
      const fd = new FormData();

      fd.append('file',this.selectedFile, this.selectedFile.name)
      this.http.post(this.uploadFile + "?email=" + sessionStorage.email + "&token=" + sessionStorage.token ,fd,{
        reportProgress: true,
        observe:'events'
      })
        .subscribe(event => {
          if(event.type === HttpEventType.UploadProgress){
            this.porcentaje = Math.round(event.loaded / event.total * 100) + "%";
            console.log('Upload Progress: '+ this.porcentaje)

          }else if(event.type === HttpEventType.Response){
              this.getAllUserFiles();

              console.log("EVENT " + JSON.stringify(event));
              console.log("EVENT " + JSON.stringify(HttpEventType.Response));
              if(HttpEventType.Response == 4){
                alert('Archivo Subido Exitosamente');
              }
          }

        });
      }
  }


  ngOnInit() {
    this.getAllUserFiles();
  }

  getAllUserFiles(){
    this.fileService.userFilesList(sessionStorage.getItem('email'),sessionStorage.getItem('token'))
    .subscribe(res => {
      this.fileList = res['result'];
    });
  }


  downloadFile(fileID: string ){
    console.log("entro!!!  " + fileID)
    this.fileService.downloadFile(sessionStorage.getItem('email'),sessionStorage.getItem('token'), fileID)
    .subscribe(res => {
      this.fileList = res['result'];
    });
  }

}
