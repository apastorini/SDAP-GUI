import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';
//import { AuthService, GoogleLoginProvider } from "angular5-social-login";
import { HttpClient} from '@angular/common/http'
import { Router,Routes, RouterModule} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../utils/modal/modal.component';

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
  buttonDisabled: boolean = false;
  private formSubmitAttempt: boolean; // {2}

  constructor(
    private userService: UserService,
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private modalService: NgbModal
  )
    { }

  ngOnInit() {
    this.registerForm = this.fb.group({     // {5}
      name: ['', Validators.required],
      secondName: ['', Validators.required],
      email: ['',
      [Validators.required,Validators.email]],
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
            console.log("DATOOOOS   " + JSON.stringify(res) + " +++++++");
            console.log("DATOOOOS   " + JSON.stringify(res['code']));
            console.log(typeof res['code']);


            if(res['code']==0){
              this.successfullySaved = true;
                this.openModal("Usuario creado", "","assets/img/green.png");
                this.submitted = false;
                this.registerForm.reset();
              //alert("")
            }
            else{
              this.errorSaved = true;
              this.openModal("Error al crear usuario", "","assets/img/red.png");
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

  openModal(title,text,type) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.text = text;
    modalRef.componentInstance.type = type;

    modalRef.result.then((result) => {
      console.log("resultados del modal  "+result);
    }).catch((error) => {
      console.log(error);
    });
  }




}
