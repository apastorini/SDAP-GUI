import { Component, OnInit } from '@angular/core';
import { GoogleDriveService } from '../../services/google-drive.service';
import { DriveResource } from '../../services/drive-resource.service';
import { GoogleAuthService } from 'ng-gapi';
import { GoogleApiService } from 'ng-gapi';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-google-drive',
  templateUrl: './google-drive.component.html',
  styleUrls: ['./google-drive.component.css']
})
export class GoogleDriveComponent implements OnInit {

  title = 'Drive Viewer App';
  public driveFiles: any;
  public filteredFiles:any = [];

  constructor(private userService: GoogleDriveService, private authService: GoogleAuthService, private gapiService: GoogleApiService, private DriveRes:DriveResource) { }

  ngOnInit() {
  }



public hola(){
this.gapiService.onLoad().subscribe();
     this.authService.getAuth().subscribe((auth) => {});
     if (this.userService.isUserSignedIn())
     {
       this.DriveRes.getFileList(this.userService.getToken()).subscribe(res=> this.driveFiles= res.items);
       var i : any;
       var counter:number = 0;
       for ( i in this.driveFiles)
       {
         if (this.driveFiles[i].mimeType == 'application/pdf')
         {
           this.filteredFiles[counter] = this.driveFiles[i];
           counter++;
           console.log(i);
         }
       }
        this.syncFiles();
     }
 }

    public isLoggedIn(): boolean {
      return this.userService.isUserSignedIn();
    }

    public signIn() {
      this.userService.signIn();
    //this.syncFiles();
    }

    public signOut()
    {
      this.userService.signOut();
    }


    public getAllFiles()
    {
       this.DriveRes.getFileList(this.userService.getToken()).subscribe(res=> this.driveFiles= res.items);
    }




    public filterFiles()
    {
      var i : any;
      var counter:number = 0;
      for ( i in this.driveFiles)
      {
        if (this.driveFiles[i].mimeType == 'application/pdf' ||
            this.driveFiles[i].mimeType == 'application/vnd.google-apps.document' ||
            this.driveFiles[i].mimeType == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

      )
        {
          this.filteredFiles[counter] = this.driveFiles[i];
          counter++;
          console.log(i);
        }
      }
    }

    public syncFiles()
    {
      this.getAllFiles();
      this.filterFiles();
    }



  gapi: any;
  public auth2: any;

  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '201920202566-uc6jqfou1kv5g7cq6hljg27rr02l1era.apps.googleusercontent.com',
        //cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }

  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {

        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        //YOUR CODE HERE

      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

ngAfterViewInit(){
      this.googleInit();
}


 }
