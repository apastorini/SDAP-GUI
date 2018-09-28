import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  dashBoardData;
  constructor(
  private homeService: HomeService

  ) { }

  ngOnInit() {
    this.getDashBoard();

  }

  private getDashBoard(){
    console.log("lista shared" + JSON.stringify(this.dashBoardData));
    this.homeService.getDashBoard(sessionStorage.getItem('email'),sessionStorage.getItem('token')).subscribe(res => {
      this.dashBoardData =  res['result'];
      console.log("lista shared" + JSON.stringify(this.dashBoardData));
    });


  }

}
