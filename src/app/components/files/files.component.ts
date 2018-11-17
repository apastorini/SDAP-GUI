import { Component, OnInit } from '@angular/core';
import { Constants } from '../../utils/Constants';
import { FileService } from '../../services/file.service';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Session } from '../../auth/loginData';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../utils/modal/modal.component';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: []
})

export class FilesComponent implements OnInit {
  fileList = [];
  porcentaje = '';
  public uploadFile = Constants.BASE_URL +  'documentController/addFileToUser';
  selectedFile: File = null;
  buttonDisabled: boolean = false;
  fileID = null;

  constructor(
    private http: HttpClient,
    private fileService: FileService,
    private modalService: NgbModal
  ){}

  onFileSelected(event){
    this.porcentaje='';
    this.selectedFile = <File> event.target.files[0];

  }

  upload(){
    this.buttonDisabled=true;
    const fd = new FormData();
    console.log("ULPLOAD()")
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

            console.log("EVENT  CODE" + JSON.stringify(event['body']['code']));

            if(JSON.stringify(event['body']['code']) == '1'){
              this.openModal(JSON.stringify(event['body']['message']),'El archivo ya existe en el sistem o fue eliminado. Cambie el nombre del archivo y vuelva a intentarlo.',"error","error");

            }
            if(JSON.stringify(event['body']['code']) == '0'){
              this.openModal(JSON.stringify(event['body']['message']),'' ,"success","success");

            }

        }

      });
  }

  uploadFlow(){
    console.log("hola "+ this.selectedFile)
    if(this.selectedFile == null){
      this.openModal("Archivo no seleccionado", "Seleccione archivo a subir e intentelo nuevamente","error","error");
    }
    else
      this.openModal("Esta seguro de subir el documento?", "Haga click en 'Confirmar' para subir el documento o en 'Cerrar' para cancelar la accion","confirm",'upload');
  }

  ngOnInit() {
    this.getAllUserFiles();
  }

  getAllUserFiles(){
    this.fileService.userFilesList(sessionStorage.getItem('email'),sessionStorage.getItem('token'))
    .subscribe(res => {
      console.log("solucion: " + JSON.stringify(res['result']))
      if(JSON.stringify(res['result'])!="[]"){
        console.log("Entra");

        this.fileList = res['result'];

        console.log("fileList length:  " + this.fileList.length  );
      }else
      {
        this.fileList = [];
      }


    });
  }

deleteFileFlow(fileID: string){
  this.fileID=fileID;
  this.openModal("¿Esta seguro de eliminar el archivo?", "Haga click en 'Confirmar' para eliminar el archivo o en 'Cerrar' para cancelar la accion","confirm",'delete')

}

  downloadFile(fileID: string ){
    console.log("entro!!!  " + fileID)
    this.fileService.downloadFile(sessionStorage.getItem('email'),sessionStorage.getItem('token'), fileID)
    .subscribe(res => {
      console.log("entro!!!  " + res);
      console.log("entro string Importante !!!  " + JSON.stringify(res));

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



  openModal(title,text,type,action) {
    let ngbModalOptions: NgbModalOptions = {
          backdrop : 'static',
          keyboard : false
    };
    const modalRef = this.modalService.open(ModalComponent,ngbModalOptions);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.text = text;
    modalRef.componentInstance.type = type;
    modalRef.componentInstance.action = action;


    modalRef.result.then((result) => {

      console.log("resultados del modal  "+result);
      if(result=='delete'){
        this.deleteFile(this.fileID)
      }
      if(result=='upload'){
        this.upload();

      }

    }).catch((error) => {
      console.log(error);
    });
  }


  }
