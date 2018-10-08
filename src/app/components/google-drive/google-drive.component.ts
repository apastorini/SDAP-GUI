import { Component, NgZone, OnInit } from "@angular/core";
import { AppContext } from "../../../infrastructure/app.context";
import { FileInfo, MIME_TYPE_FOLDER } from "../../../model/fileInfo"


//import { DialogOneInputComponent } from "../dialogoneinput/dialogoneinput.component";
//import { DialogOneInputData } from "../../models/dialogOneInputData";

import { Router } from "@angular/router";

@Component({
    selector: "google-drive",
    templateUrl: "./google-drive.component.html",
    styleUrls: ["./google-drive.component.css"]
})
export class GoogleDriveComponent implements OnInit{
files: FileInfo[] = [];

    constructor(
        private appContext: AppContext,
        private router: Router,
        private zone: NgZone,
    ) {
      //this.dataSource = new MatTableDataSource(this.files);



    }



signIn(){
  this.appContext.Session.Gapi.signIn().then(() => {
    if(this.appContext.Session.Gapi.isSignedIn){
      console.log("ESTAS LOGUEADO")
      this.refresh("root");
    }
    else
      console.log("NO ESTAS LOGUEADO")
  });

}

ngOnInit(): void {
    //this.appContext.Session.BreadCrumb.init();
    //this.breadCrumbItems = this.appContext.Session.BreadCrumb.items;

}

refresh(fileId: string) {
    this.appContext.Repository.File.getFiles(fileId)
        .then((res) => {
            this.zone.run(() => {
                this.files = res;
                console.log("MIS ARCHIVOS " + JSON.stringify(this.files))
                //this.dataSource.data = this.files;
            });
        });
}





}
