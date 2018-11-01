import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router,Routes, RouterModule} from '@angular/router';
import { Constants } from '../../utils/Constants';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../utils/modal/modal.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
  form: FormGroup;                    // {1}
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
    this.form = this.fb.group({     // {5}
      mail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value);
       // {7}
    }
    this.formSubmitAttempt = true;             // {8}
  }

  goToPassword(){
    this.router.navigate(['password']);
  }

   goToSignin(){
     this.router.navigate(['signin']);
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
