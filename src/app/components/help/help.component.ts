import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: []
})
export class HelpComponent implements OnInit {

  role: string;
  email: string;

  constructor() { }


  ngOnInit() {
      this.role = sessionStorage.getItem('role');
      this.email = sessionStorage.getItem('email');

  }

}
