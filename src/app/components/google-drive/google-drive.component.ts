import { Component, NgZone, OnInit } from "@angular/core";
import { AppContext } from "../../../infrastructure/app.context";
import { FileInfo, MIME_TYPE_FOLDER } from "../../../model/fileInfo"
import { BreadCrumbItem } from "../../../model/breadCrumbItem";
import { MatTableDataSource } from "@angular/material/table";
import { BreadCrumbItemOption, OPTION_NEW_FOLDER, OPTION_UPLOAD_FILES } from "../../../model/breadCrumbItemOption";
import { MatDialog } from "@angular/material/dialog";
import { DialogOneInputComponent } from "../dialogoneinput/dialogoneinput.component"
import { DialogOneInputData } from "../../../model/dialogOneInputData"
import { MatBottomSheet } from '@angular/material';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Constants } from '../../utils/Constants';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../utils/modal/modal.component';




import { Router } from "@angular/router";

@Component({
    selector: "google-drive",
    templateUrl: "./google-drive.component.html",
    styleUrls: []
})
export class GoogleDriveComponent implements OnInit{
   breadCrumbItems: BreadCrumbItem[] = [];
   dataSource: MatTableDataSource<FileInfo>;
   //displayedColumns: string[] = ["icon", "name", "modifiedTime", "size", "delete"];
   displayedColumns: string[] = ["icon", "name", "modifiedTime", "size"];
   files: FileInfo[] = [];
   isSignedIn: boolean = this.appContext.Session.Gapi.isSignedIn;
   email: string;
   public uploadFile = Constants.BASE_URL +  'documentController/addFileToUser';
   public buttonDisabled: boolean = false;
   public porcentaje=''


    constructor(
        private appContext: AppContext,
        private router: Router,
        private zone: NgZone,
        public dialog: MatDialog,
        private bottomSheet: MatBottomSheet,
        private http: HttpClient,
        private modalService: NgbModal


    ) {

      console.log("TEST FILES   "+ JSON.stringify(this.files))
      this.dataSource = new MatTableDataSource(this.files);


    }

onRefresh(){
    this.refresh("root");
}

signIn(){
  this.appContext.Session.Gapi.signIn().then(() => {
    if(this.appContext.Session.Gapi.isSignedIn){
      this.isSignedIn = this.appContext.Session.Gapi.isSignedIn;

      console.log("ESTAS LOGUEADO")
      this.appContext.Session.BreadCrumb.init();
      this.breadCrumbItems = this.appContext.Session.BreadCrumb.items;
      this.refresh("root");

    }
    else
      console.log("NO ESTAS LOGUEADO")
  });

}

singOut(){
  this.appContext.Session.Gapi.signOut();
  this.refresh("root");

}

browse(file: FileInfo) {
       if (file.IsFolder) {
           this.appContext.Repository.File.getFiles(file.Id)
               .then((res) => {
                   this.zone.run(() => {

                       this.files = res;
                       this.dataSource.data = this.files;
                       this.appContext.Session.BreadCrumb.navigateTo(file.Id, file.Name);
                       this.breadCrumbItems = this.appContext.Session.BreadCrumb.items;
                   });
               });
       }
   }

   createNewFolder() {
          var data: DialogOneInputData = new DialogOneInputData();
          data.DefaultInputText = "Untitled folder";
          data.Title = "New folder"
          const dialogRef = this.dialog.open(DialogOneInputComponent, {
              width: '250px',
              data: data
          });

          dialogRef.afterClosed().subscribe(result => {
              if (result) {
                  this.appContext.Repository.File.create(
                      this.appContext.Session.BreadCrumb.currentItem.Id,
                      result)
                      .then(() => {
                          this.refresh(this.appContext.Session.BreadCrumb.currentItem.Id);
                      });
              }

          });
      }

      delete(file: FileInfo) {
          var index = this.files.indexOf(file);
          if (index > -1) {
              this.files.splice(index, 1);
              this.appContext.Repository.File.delete(file.Id)
                  .then(() => {
                      this.zone.run(() => {
                          this.dataSource.data = this.files;
                          console.log("Delete successfully");
                      });
                  });
          }
      }


      ngOnInit(): void {
        console.log("isSignedIn 1  " +this.isSignedIn);
          this.isSignedIn = this.appContext.Session.Gapi.isSignedIn;
          this.appContext.Session.BreadCrumb.init();
          this.breadCrumbItems = this.appContext.Session.BreadCrumb.items;
          this.refresh("root");
          console.log("isSignedIn 2   " +this.isSignedIn);

      }

      logout(): void{

      }

      onSelectedItemChanged($event: BreadCrumbItem) {
          let fileInfo: FileInfo = new FileInfo();
          fileInfo.Id = $event.Id;
          fileInfo.Name = $event.Name;
          fileInfo.MimeType = MIME_TYPE_FOLDER;
          this.browse(fileInfo);
      }

      // onSelectedOptionChanged($event: BreadCrumbItemOption) {
      //     if ($event.Option === OPTION_NEW_FOLDER) {
      //         this.createNewFolder();
      //     }
      //     else if ($event.Option === OPTION_UPLOAD_FILES) {
      //         // this.importByUrl();
      //         this.bottomSheet.open(FilesUploadComponent, { data: $event.Data });
      //     }
      // }

      refresh(fileId: string) {
          this.appContext.Repository.File.getFiles(fileId)
              .then((res) => {
                  this.zone.run(() => {
                      this.files = res;
                      console.log('files: ' + JSON.stringify(res))
                      this.dataSource.data = this.files;
                  });
              });
      }



      downloadFile(fileID: string,name:string ){
        console.log("downloadFile");
        console.log("entro!!!  " + fileID)
        console.log("%c entro!!!, {color= orange}  " + fileID);
        //console.log("GOOGLE AUTH:   " + JSON.stringify(this.appContext.Session.Gapi.googleAuth));


        this.appContext.Repository.File.downloadFileGoogle(fileID)
        .subscribe(res => {
          console.log("ENTRO AL BLOB!!!!!! " + res);
          console.log("entro string !!!  " + JSON.stringify(res));

          var file = new Blob([res], {type: 'application/pdf'});

          let fd=new FormData();
          fd.append("blob",file, name);
          this.upload(file,name)

          //this.showFile(file)
        });
      }



      upload(file:Blob, name:string){
        this.buttonDisabled=true;
        const fd = new FormData();
        console.log("ULPLOAD()")
        fd.append('file',file, name )
        console.log("Archivo a subir" + file)
        console.log("Archivo a subir" + JSON.stringify(file) )
        this.http.post(this.uploadFile + "?email=" + sessionStorage.email + "&token=" + sessionStorage.token ,fd,{
          reportProgress: true,
          observe:'events'
        })
          .subscribe(event => {
            if(event.type === HttpEventType.UploadProgress){
              this.porcentaje = Math.round(event.loaded / event.total * 100) + "%";
              //console.log('Upload Progress: '+ this.porcentaje)

            }else if(event.type === HttpEventType.Response){
              this.buttonDisabled = false;
                //this.getAllUserFiles();

                console.log("EVENT " + JSON.stringify(event));
                console.log("EVENT " + JSON.stringify(HttpEventType.Response));

                console.log("EVENT  CODE" + JSON.stringify(event['body']['code']));

                if(JSON.stringify(event['body']['code']) == '1'){
                  this.openModal(JSON.stringify(event['body']['message']),'El archivo ya existe en el sistem o fue eliminado.',"error","error");

                }
                if(JSON.stringify(event['body']['code']) == '0'){
                  this.openModal(JSON.stringify(event['body']['message']),'' ,"success","success");

                }

            }

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


            }).catch((error) => {
              console.log(error);
            });
          }





}
