import { Component, OnInit } from '@angular/core';
import { Router,Routes, RouterModule} from '@angular/router';
import { PasswordPayload } from '../../services/payload/PasswordPayload';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: []
})
export class PasswordComponent implements OnInit {

  userEmail:string;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmitClicked() {
    const payload = new PasswordPayload();
    payload.userEmail = this.userEmail;

    this.loginService.recuperarPassword(this.userEmail);
  }
  goToLogin(){
    this.router.navigate(['login']);
  }
}
