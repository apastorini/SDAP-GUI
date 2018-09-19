import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: []
})
export class FooterComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  userName: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;

  }

}
