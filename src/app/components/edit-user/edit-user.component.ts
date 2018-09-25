import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';
//import { AuthService, GoogleLoginProvider } from "angular5-social-login";
import { HttpClient} from '@angular/common/http'
import { Router,Routes, RouterModule} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styles: []
})
export class EditUserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  emailExists:boolean;      // {1}
  fileList = [];
  optionSelected: any;
  enable:boolean;
  private formSubmitAttempt: boolean; // {2}
  private isChecked: boolean

  constructor(
    private userService: UserService,
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService) {}

    // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.getAllUsers();
    this.registerForm = this.fb.group({     // {5}
    name: ['', Validators.required],
    secondName: ['', Validators.required],
    googleMail: ['', Validators.email],
    email: ['',
    [Validators.required,Validators.email]],
    //passwordGoogle:['Mensaje requerido', Validators.required],
    });

  }


onSubmit() {
  this.submitted = true;
 
  // stop here if form is invalid
  if (this.registerForm.invalid) {
    console.log('FLAG 10')
    return;
  }
  else{
    if(confirm("Esta seguro que quiere modificar el usuario")) {
    this.userService.modifyUser(this.registerForm.value).subscribe(res =>{
     if(true){
       this.getAllUsers();
       alert("Usuario modificado")
     }
     else{
       //  alert("Error al crear usuario")
       }
     })

   }
 }
}

getAllUsers(){
  this.userService.getAllUsers().subscribe(res=>{
    console.log('RES!!!'+JSON.stringify(res['result']) );
    this.fileList = res['result'];
  })
}

  onOptionSelected(event){
    console.log("cheked :  "+ this.isChecked);
     console.log(event); //option value will be sent as event
     this.optionSelected = event.target.value;
     console.log("REtencion "+ event.target.value.enable);
    //this.isChecked=this.fileList[event.target.value].enable

    console.log("cheked :  "+ this.isChecked);

     this.registerForm.setValue({
        name: this.fileList[event.target.value].name,
        googleMail: this.fileList[event.target.value].googleMail,
        secondName: this.fileList[event.target.value].secondName,
        email: this.fileList[event.target.value].email,
        //enablecheck: this.fileList[event.target.value].enable
     });

  }
}
