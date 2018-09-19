import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';
//import { AuthService, GoogleLoginProvider } from "angular5-social-login";
import { HttpClient} from '@angular/common/http'
import { Router,Routes, RouterModule} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

 //[ existingMobileNumberValidator(this.userService),
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: []
})

export class CreateUserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  emailExists:boolean;
  successfullySaved = false;
  errorSaved = false;
  private formSubmitAttempt: boolean; // {2}

  constructor(
    private userService: UserService,
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService)
    { }

  ngOnInit() {
    this.registerForm = this.fb.group({     // {5}
      name: ['', Validators.required],
      secondName: ['', Validators.required],
      googleMail: ['', Validators.email],
      email: ['',
      [Validators.required,Validators.email]],
      passwordGoogle:['Mensaje requerido', Validators.required],
      password:['',[
        Validators.required,
        Validators.minLength(6)]],
      r_password: ['',[
        Validators.required,
        Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
 get f() { return this.registerForm.controls; }

 onSubmit() {
        this.submitted = true;
 
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        else{

          this.userService.createUser(this.registerForm.value).subscribe(res =>{
            //console.log(JSON.stringify(res['code']));
            if(res['code']!=0){
              this.successfullySaved = true;
              alert("Usuario creado Exitosamente")
            }
            else{
              this.errorSaved = true;
              alert("Error al crear usuario")
            //  alert("Error al crear usuario")
            }
          })
    }
}

  goToLogin(){
    this.router.navigate(['login']);
  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.registerForm.get(field).valid && this.registerForm.get(field).touched) ||
      (this.registerForm.get(field).untouched && this.formSubmitAttempt)
    );
  }

  userExist(){
    let value = this.userService.exist(this.registerForm.controls['email'].value);
    //console.log(value);
    this.registerForm.controls['email'].setErrors({'incorrect': value});
  }



}
