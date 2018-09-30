import { Component, OnInit } from '@angular/core';
import { Constants } from '../../utils/Constants';
import { FileService } from '../../services/file.service';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Session } from '../../auth/loginData';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../utils/modal/modal.component';


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
  buttonDisabled: boolean = false;

  constructor(
    private http: HttpClient,
    private fileService: FileService,
    private modalService: NgbModal
  ){}

  onFileSelected(event){
    this.selectedFile = <File> event.target.files[0];

  }

  onUpload(){
    console.log("hola"+ this.buttonDisabled)
    if(this.selectedFile == null){
      this.openModal("Archivo no seleccionado", "Seleccione archivo a subir e intentelo nuevamente","assets/img/red.png");
    }
    else{
      this.buttonDisabled=true;
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
            this.buttonDisabled = false;
              this.getAllUserFiles();

              console.log("EVENT " + JSON.stringify(event));
              console.log("EVENT " + JSON.stringify(HttpEventType.Response));
              if(HttpEventType.Response == 4){
                this.openModal("Archivo subido", "puedes descargarlo o eliminarlo desde la lista de archivos","assets/img/green.png");
              //  alert('Archivo Subido Exitosamente');
              }
          }

        });
      }
      console.log("chau  "+ this.buttonDisabled)
  }

  ngOnInit() {
    this.getAllUserFiles();
  }

  getAllUserFiles(){
    this.fileService.userFilesList(sessionStorage.getItem('email'),sessionStorage.getItem('token'))
    .subscribe(res => {
      console.log("respuesta: " + JSON.stringify(res));
      this.fileList = res['result'];
    });
  }

  downloadFile(fileID: string ){
    console.log("entro!!!  " + fileID)
    this.fileService.downloadFile(sessionStorage.getItem('email'),sessionStorage.getItem('token'), fileID)
    .subscribe(res => {
      console.log("entro!!!  " + res);
      console.log("entro string !!!  " + JSON.stringify(res));

      var file = new Blob([res], {type: 'application/pdf'});

      this.showFile(file)
    });
  }


  deleteFile(fileID: string){

    this.fileService.deleteFile(sessionStorage.getItem('email'),sessionStorage.getItem('token'), fileID)
    .subscribe(res =>{
      this.getAllUserFiles();
      console.log("OT " + JSON.stringify(res));
      //this.openModal("NO SE ELIMINO", "FUNCION NO IMPLEMENTADA,","assets/img/red.png");
    });
  }

  showFile(blob){
    console.log("size!!!  " + blob.size);

    // IE doesn't allow using a blob object directly as link href
    // instead it is necessary to use msSaveOrOpenBlob
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob);
      return;
    }

    // For other browsers:
    // Create a link pointing to the ObjectURL containing the blob.
    const data = window.URL.createObjectURL(blob);
    console.log("data windows url !!!  " + JSON.stringify(data));
    var link = document.createElement('a');
    link.href = data;
    link.download="file.pdf";
    console.log("data file url !!!  " + JSON.stringify(link));
    link.click();
  }


  openModal(title,text,type) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.text = text;
    modalRef.componentInstance.type = type;

    modalRef.result.then((result) => {
      console.log("resultados del modal  "+result);
    }).catch((error) => {
      console.log(error);
    });
  }








  }
