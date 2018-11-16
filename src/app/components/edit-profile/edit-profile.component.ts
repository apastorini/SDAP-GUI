import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';
import { HttpClient} from '@angular/common/http'
import { Router,Routes, RouterModule} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { NgbModal,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../utils/modal/modal.component';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: []
})
export class EditProfileComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  emailExists:boolean;      // {1}
  private formSubmitAttempt: boolean; // {2}
  role= "";

  constructor(
    private userService: UserService,
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private modalService: NgbModal,
    //private user: User
  )
    { }

  ngOnInit() {
    this.getAllUsers();

    this.registerForm = this.fb.group({     // {5}
      name: ['', Validators.required],
      secondName: ['', Validators.required],
      email: [sessionStorage.getItem('email'),
      [Validators.required,Validators.email]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
          this.submitted = true;
   
          // stop here if form is invalid
          if (this.registerForm.invalid) {
            this.openModal("Error al editar perfil", "Uno o mas campos son incorrectos, complete los campos correctamente y vuelva a intentarlo","error","error");
              return;
          }
        else{

          this.openModal("¿Esta seguro de modificar su perfil?", "Haga click en 'Confirmar' para modificar el perfil o en 'Cerrar' para cancelar la accion",'confirm',"edit")


      }
  }


editarPerfil(){
  console.log("MIS DATOS  "+ this.registerForm.value)

  this.userService.modifyUser(this.registerForm.value).subscribe(res =>{

      this.openModal("Perfil modificado", "","success","success");

  })
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
    console.log(value);
    this.registerForm.controls['email'].setErrors({'incorrect': value});
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(res=>{
      res['result'].forEach(variable => {

        if(variable.email==sessionStorage.getItem('email')){
        //  this.user = variable;
        this.registerForm.setValue({
           name: variable.name,
           secondName: variable.secondName,
           email:sessionStorage.getItem('email')

           //enablecheck: this.fileList[event.target.value].enable
        });

        this.role=variable.roles[0].name;

        }

      });

      //this.user = res['result'];



    })
  }

  goToChangePassword(){
    this.router.navigate(['change-password']);
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
    modalRef.componentInstance.action = action;

    modalRef.result.then((result) => {
      console.log("resultados del modal  "+result);
      if(result=='edit'){
        this.editarPerfil();

      }
    }).catch((error) => {
      console.log(error);
    });
  }



  }
