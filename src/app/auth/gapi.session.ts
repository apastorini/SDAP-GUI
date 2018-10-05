import { Injectable, EventEmitter } from "@angular/core";
//import { AppRepository } from "../repositories/app.repository";
const CLIENT_ID = "201920202566-uc6jqfou1kv5g7cq6hljg27rr02l1era.apps.googleusercontent.com";
const API_KEY = "AIzaSyAjkvfgqsJ2ZErjzlRoxWEn02haP_4VIOg";
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
var SCOPES = 'https://www.googleapis.com/auth/drive';

@Injectable()
export class GapiSession {
    googleAuth: gapi.auth2.GoogleAuth;


    constructor(
      //  private appRepository: AppRepository

    ) {
    }

    initClient() {
      console.log("1");
      //console.log("gapi " + JSON.stringify(gapi));

        return new Promise((resolve,reject)=>{
          console.log("2");
             gapi.load('client:auth2', () => {
              console.log("3");
                return gapi.client.init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    discoveryDocs: DISCOVERY_DOCS,
                    scope: SCOPES,
                }).then(() => {

                  console.log("4");
                    this.googleAuth = gapi.auth2.getAuthInstance();
                    resolve();
                });
            });
        });

    }
    get isSignedIn(): boolean {
        return this.googleAuth.isSignedIn.get();
    }

    signIn() {
        return this.googleAuth.signIn({
            prompt: 'consent'
        }).then((googleUser: gapi.auth2.GoogleUser) => {
            console.log("googleUser.getBasicProfile() : " + JSON.stringify(googleUser.getBasicProfile()))
            //this.appRepository.User.add(googleUser.getBasicProfile());
        });
    }

    signOut(): void {
        this.googleAuth.signOut();
    }
}
