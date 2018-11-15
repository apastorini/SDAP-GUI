import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';
//import { AuthService, GoogleLoginProvider } from "angular5-social-login";
import { HttpClient} from '@angular/common/http'
import { Router,Routes, RouterModule,ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { NgbModal,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../utils/modal/modal.component';


@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: []
})
export class NewPasswordComponent implements OnInit {
registerForm: FormGroup;
email: string;
token: string;
submitted = false;


constructor(

  private userService: UserService,
  private http: HttpClient,
  private router: Router,
  private fb: FormBuilder,
  private modalService: NgbModal,
  private route: ActivatedRoute
) {}

  // convenience getter for easy access to form fields
 get f() { return this.registerForm.controls; }

ngOnInit() {
   this.email = this.route.snapshot.queryParamMap.get('email');
   this.token = this.route.snapshot.queryParamMap.get('token');

  this.registerForm = this.fb.group({     // {5}
  password: ['', Validators.required],
  confirmation: ['', Validators.required]
  });
}

onSubmit() {
  console.log("email: " + this.email)
  console.log("token: " + this.token)

  this.openModal("¿Esta seguro de querer reestablecer la contraseña?","Haga click en 'Confirmar' para reestablecer su contraseña o en 'Cerrar' para cancelar la accion","confirm","modificar")


}

recuperarContrasena(){
  this.userService.recuperarContrasenia(this.email,this.token,this.registerForm.get("password").value).subscribe((res)=>{
    this.openModal("Contraseña reesrablecida","cierre este mensaje para dirigirse a pagina de login","exito","exito")

     console.log("recuperarContrasena     "+ JSON.stringify(res));

  })
}


  openModal(title,text,type,action) {
    let ngbModalOptions: NgbModalOptions = {
          backdrop : 'static',
          keyboard : false
    };
    const modalRef = this.modalService.open(ModalComponent,ngbModalOptions);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.text = text;
    modalRef.componentInstance.type = type;
    modalRef.componentInstance.type = action;


    modalRef.result.then((result) => {
      console.log("resultados del modal  "+result);

      if(result=="modificar"){
        this.recuperarContrasena()

      }
      if(result=="exito"){

      }



    }).catch((error) => {
      console.log(error);
    });
  }


}
