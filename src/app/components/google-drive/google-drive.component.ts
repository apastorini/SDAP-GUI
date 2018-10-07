//import { Component } from "@angular/core";
import { Component, NgZone, OnInit } from "@angular/core";
import {AppContext} from '../../../infrastructure/app.context';
import {FileInfo, MIME_TYPE_FOLDER} from '../../../models/fileInfo';


//import { DialogOneInputComponent } from "../dialogoneinput/dialogoneinput.component";
//import { DialogOneInputData } from "../../models/dialogOneInputData";

import { Router } from "@angular/router";

@Component({
    selector: "google-drive",
    templateUrl: "./google-drive.component.html",
    styleUrls: ["./google-drive.component.css"]
})
export class GoogleDriveComponent implements OnInit{

  displayedColumns: string[] = ["icon", "name", "modifiedTime", "size", "delete"];
  files: FileInfo[] = [];

    constructor(
        private appContext: AppContext,
        private router: Router,
        private zone: NgZone,
    ) {
      //this.dataSource = new MatTableDataSource(this.files);
      this.appContext.Session.File.uploadFinished.subscribe(() => {
          //this.refresh(this.appContext.Session.BreadCrumb.currentItem.Id);
      });

    }

    signIn() {
        this.appContext.Session.Gapi.signIn()
            .then(() => {
                if (this.appContext.Session.Gapi.isSignedIn) {
                  console.log("hice login")
                  //  this.router.navigate(["/dashboard"]);
                }
            });
    }


    ngOnInit(): void {
        // this.appContext.Session.BreadCrumb.init();
        // this.breadCrumbItems = this.appContext.Session.BreadCrumb.items;
        // this.refresh("root");
    }



        //breadCrumbItems: BreadCrumbItem[] = [];
        //dataSource: MatTableDataSource<FileInfo>;





        browse(file: FileInfo) {
            if (file.IsFolder) {
                this.appContext.Repository.File.getFiles(file.Id)
                    .then((res) => {
                        this.zone.run(() => {
                            this.files = res;
                            //this.dataSource.data = this.files;
                            //this.appContext.Session.BreadCrumb.navigateTo(file.Id, file.Name);
                            //this.breadCrumbItems = this.appContext.Session.BreadCrumb.items;
                        });
                    });
            }
        }

        // createNewFolder() {
        //     //var data: DialogOneInputData = new DialogOneInputData();
        //     data.DefaultInputText = "Untitled folder";
        //     data.Title = "New folder"
        //     const dialogRef = this.dialog.open(DialogOneInputComponent, {
        //         width: '250px',
        //         data: data
        //     });
        //
        //     dialogRef.afterClosed().subscribe(result => {
        //         if (result) {
        //             this.appContext.Repository.File.create(
        //                 this.appContext.Session.BreadCrumb.currentItem.Id,
        //                 result)
        //                 .then(() => {
        //                     this.refresh(this.appContext.Session.BreadCrumb.currentItem.Id);
        //                 });
        //         }
        //
        //     });
        // }
        //
        // delete(file: FileInfo) {
        //     var index = this.files.indexOf(file);
        //     if (index > -1) {
        //         this.files.splice(index, 1);
        //         this.appContext.Repository.File.delete(file.Id)
        //             .then(() => {
        //                 this.zone.run(() => {
        //                     this.dataSource.data = this.files;
        //                     console.log("Delete successfully");
        //                 });
        //             });
        //     }
        // }






        // onSelectedItemChanged($event: BreadCrumbItem) {
        //     let fileInfo: FileInfo = new FileInfo();
        //     fileInfo.Id = $event.Id;
        //     fileInfo.Name = $event.Name;
        //     fileInfo.MimeType = MIME_TYPE_FOLDER;
        //     this.browse(fileInfo);
        // }

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
                      //  this.dataSource.data = this.files;
                    });
                });
        }




}
