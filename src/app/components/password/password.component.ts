import { Component, OnInit } from '@angular/core';
import { Router,Routes, RouterModule} from '@angular/router';
import { PasswordPayload } from '../../services/payload/PasswordPayload';
import { LoginService } from '../../services/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../utils/modal/modal.component';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: []
})
export class PasswordComponent implements OnInit {

  userEmail:string;
  form: FormGroup;


  constructor(
    private router: Router,
    private loginService: LoginService,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      userEmail: ['', Validators.required]
    });
  }

  onSubmitClicked() {
    const payload = new PasswordPayload();
    payload.userEmail = this.userEmail;
    console.log("email." + this.form.get("userEmail").value);

    if (this.form.valid) {
      this.loginService.recuperarPassword(this.form.get("userEmail").value)
      .subscribe(res => {

        if(res['code']===1){

          this.openModal(res["message"], "","error","error")

        }else
          this.openModal("Email enviado", "","success","success")

  console.log("asdasdsa" + JSON.stringify(res))
  //this.openModal("Email enviado", "","success","success")

      });







    }
  }
  goToLogin(){
    this.router.navigate(['login']);
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
      if(result=='edit'){

      }
    }).catch((error) => {
      console.log(error);
    });
  }

}
