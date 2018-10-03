import {Injectable, NgZone} from "@angular/core";
import {GoogleAuthService} from "ng-gapi/lib/GoogleAuthService";
import * as _ from "lodash";
import GoogleUser = gapi.auth2.GoogleUser;
import GoogleAuth = gapi.auth2.GoogleAuth;

@Injectable()
export class GoogleDriveService {
    public static SESSION_STORAGE_KEY: string = 'accessToken';
    private user: GoogleUser;


    constructor(private googleAuth: GoogleAuthService){
    }

    public getToken(): string {
        let token: string = sessionStorage.getItem(GoogleDriveService.SESSION_STORAGE_KEY);
        if (!token) {
            throw new Error("no token set , authentication required");
        }
        return sessionStorage.getItem(GoogleDriveService.SESSION_STORAGE_KEY);
    }

    // public signIn(): void {
    //   console.log("SII!!")
    //     this.googleAuth.getAuth()
    //         .subscribe((auth) => {
    //             auth.signIn().then(res => this.signInSuccessHandler(res));
    //             console.log("noooo!!")
    //         });
    //         console.log("Salio!!")
    //
    //       this.getToken();
    // }

    public signIn(): void {
       this.googleAuth.getAuth()
           .subscribe((auth) => {
               auth.signIn().then(res => this.signInSuccessHandler(res));
           });
   }

    // public signIn2(){
    //     this.googleAuth.getAuth().subscribe((auth) => {
    //             auth.signIn().then(res => this.signInSuccessHandler(res));
    //         });
    //       this.getToken();
    // }


    public signOut()
    {
      this.googleAuth.getAuth()
          .subscribe((auth) => {
              auth.signOut().then(
                console.log('User signed out.')
              );
          });
          sessionStorage.clear();
    }

    public isUserSignedIn(): boolean {
           // return sessionStorage.getItem(UserService.SESSION_STORAGE_KEY).length > 0;
           return !_.isEmpty(sessionStorage.getItem(GoogleDriveService.SESSION_STORAGE_KEY));
       }

    private signInSuccessHandler(res: GoogleUser) {
      console.log("moyano")
            this.user = res;
            sessionStorage.setItem(
                GoogleDriveService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
            );
            this.getToken();
        }
}
