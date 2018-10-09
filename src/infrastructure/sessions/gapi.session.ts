import { Injectable, EventEmitter } from "@angular/core";
import { AppRepository } from "../repositories/app.repository";
const CLIENT_ID = "861953150681-u8rlagkokej3ehit6k6j9r3cp1u8cn02.apps.googleusercontent.com";
const API_KEY = "AIzaSyDhs0okeCBP7QsM4P4InlhDMI_kIEe5OLA";
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
var SCOPES = 'https://www.googleapis.com/auth/drive';

@Injectable()
export class GapiSession {
    googleAuth: gapi.auth2.GoogleAuth;

    constructor(
        private appRepository: AppRepository

    ) {
    }

    initClient() {
        return new Promise((resolve,reject)=>{
            gapi.load('client:auth2', () => {
                return gapi.client.init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    discoveryDocs: DISCOVERY_DOCS,
                    scope: SCOPES,
                }).then(() => {
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

          console.log("google user   " + JSON.stringify(googleUser.getBasicProfile()));


            this.appRepository.User.add(googleUser.getBasicProfile());
        });
    }

    signOut(): void {
        this.googleAuth.signOut();
    }
}
