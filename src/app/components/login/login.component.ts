import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router,Routes, RouterModule} from '@angular/router';
import { Constants } from '../../utils/Constants';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { NgbModal,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../utils/modal/modal.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;                    // {1}
  private formSubmitAttempt: boolean; // {2}

  submitted = false;
  emailExists:boolean;      // {1}


  constructor(
    private http: HttpClient,
    private fb: FormBuilder,         // {3}
    private authService: AuthService, // {4}
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.authService.logout()
    this.registerForm = this.fb.group({     // {5}
      mail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.registerForm.get(field).valid && this.registerForm.get(field).touched) ||
      (this.registerForm.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.registerForm.valid) {

      this.authService.login(this.registerForm.value);
       // {7}
    }else{
      this.openModal("Error en login","Los campos Email y Contraseña deben tener informacion.","error","error");
    }
    this.formSubmitAttempt = true;             // {8}
  }

  goToPassword(){
    this.router.navigate(['password']);
  }

   goToSignin(){
     this.router.navigate(['signin']);
  }

  // convenience getter for easy access to form fields
 get f() { return this.registerForm.controls; }

   openModal(title,text,type,action) {
     let ngbModalOptions: NgbModalOptions = {
           backdrop : 'static',
           keyboard : false
     };
     const modalRef = this.modalService.open(ModalComponent,ngbModalOptions);
     modalRef.componentInstance.title = title;
     modalRef.componentInstance.text = text;
     modalRef.componentInstance.type = type;
     modalRef.componentInstance.action = action;

     modalRef.result.then((result) => {
       console.log("resultados del modal  "+result);
       if(result=='edit'){

       }
     }).catch((error) => {
       console.log(error);
     });
   }
  }
