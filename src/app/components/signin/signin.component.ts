import { Component, OnInit } from '@angular/core';
//import { AuthService, GoogleLoginProvider } from "angular5-social-login";
import {HttpClient} from '@angular/common/http'
import {LoginService} from '../../services/login.service';
import { Router,Routes, RouterModule} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: []
})
export class SigninComponent implements OnInit {
  form: FormGroup;                    // {1}
  private formSubmitAttempt: boolean; // {2}

  constructor(private loginService: LoginService, private http: HttpClient, private router: Router,  private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({     // {5}
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      r_password: ['', Validators.required],
    });
  }
  

  public signin(){
    this.loginService.exist('prototypeoneb@gmail.com');
  }
  goToLogin(){
    this.router.navigate(['login']);
  }



  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      console.log("Hola");
    //console.log(this.form.value);
      this.loginService.signin(this.form.value);
      console.log("cuah");

       // {7}
    }
    this.formSubmitAttempt = true;             // {8}
  }


  // public signinWithGoogle () {
  //   let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
  //
  //   this.socialAuthService.signIn(socialPlatformProvider).then(
  //     (userData) => { //on success
  //        //this will return user data from google. What you need is a user token which you will send it to the server
  //       // this.sendToRestApiMethod(userData.idToken);
  //     }
  //   );
  // }


}
