import { Injectable, EventEmitter } from "@angular/core";
//import { AppRepository } from "../repositories/app.repository";
const CLIENT_ID = "861953150681-u8rlagkokej3ehit6k6j9r3cp1u8cn02.apps.googleusercontent.com";
const API_KEY = "AIzaSyDhs0okeCBP7QsM4P4InlhDMI_kIEe5OLA";

//const API_KEY = "AIzaSyDfWOhkfEFHVI2MubUfDltgtQiyFJeOYgE";
//const CLIENT_ID = "832676091147-h05255elk5uol1ai3ki7hbtfth0oa3j0.apps.googleusercontent.com";
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
