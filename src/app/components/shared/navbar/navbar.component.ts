import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { StorageService } from '../../../auth/storageService';
import { Session } from '../../../auth/loginData';
import { Observable } from 'rxjs/Observable';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})

export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  email: string;
  role: string;
  name: string;


  constructor(
    private authService: AuthService,
    private storageService: StorageService
  ) { }


  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
    console.log("si funciona bien "+ this.isLoggedIn$);

    this.email = sessionStorage.getItem('email');
    this.role = sessionStorage.getItem('role');
    this.name = sessionStorage.getItem('name');


    this.storageService.watchStorage().subscribe((data:string) => {

      console.log("soy Data "+ data);

      this.email = sessionStorage.getItem('email');
      this.role = sessionStorage.getItem('role');

    //this will call whenever your localStorage data changes


    // use localStorage code here and set your data here for ngFor
    })

  }

  onLogout(){
    this.authService.logout();                      // {3}
  }
}
