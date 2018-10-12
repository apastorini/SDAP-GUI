import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';
import { HttpClient} from '@angular/common/http'
import { Router,Routes, RouterModule} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
            this.openModal("Error al crear usuario", "","assets/img/red.png");
              return;
          }
        else{

          this.userService.modifyUser(this.registerForm.value).subscribe(res =>{
              console.log('FLAG 11')
            console.log(JSON.stringify(res));
            console.log(JSON.stringify(res['code']));

            if(true){

              this.openModal("Usuario creado", "","assets/img/green.png");

            }
            else{
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
    console.log(value);
    this.registerForm.controls['email'].setErrors({'incorrect': value});
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(res=>{
      console.log('RES!!!'+JSON.stringify(res['result']) );
      //this.user = res['result'];

      console.log('RES!!! USEEEEEEER        '+JSON.stringify(res['result'][1]));

    })
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
