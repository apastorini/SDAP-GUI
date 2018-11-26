import { Component, OnInit, OnDestroy } from '@angular/core';
import {AnalyzeService} from '../../services/analyze.service';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/interval';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: []
})
export class ReportsComponent implements OnInit, OnDestroy {
  reportsList = [];
  public sub:Subscription;

  constructor(
  private analyzeService: AnalyzeService,
  private http: HttpClient
  ) {

    this.sub = Observable.interval(10000)
      .subscribe((val) => {
        this.getReportList()
        console.log('TIMER!'); });
  }

  ngOnInit() {
    this.getReportList()
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  getReportList(){

    this.analyzeService.listarAnalisisPorUsuario().subscribe(res=>{
      console.log("FLSG")

      if(JSON.stringify(res['result']) != "[]"){
        this.reportsList = res['result'];
          console.log("entro11111!!!  " + JSON.stringify(res['result']))
          console.log("entro!!!  " + JSON.stringify(res['result'][2]))

      }
  });


  }

  downloadReport(idAnalisis: string ){
    console.log("idAnalisis!!!  " + idAnalisis)
    this.analyzeService.reporteAnalisis(sessionStorage.getItem('email'),sessionStorage.getItem('token'), idAnalisis)
    .subscribe(res => {
      console.log("entro!!!  " + res);
      console.log("entro string !!!  " + JSON.stringify(res));

      var file = new Blob([res], {type: 'application/pdf'});

      this.showFile(file)

    });

  }

  showFile(blob){
    console.log("size!!!  " + blob.size);

    // IE doesn't allow using a blob object directly as link href
    // instead it is necessary to use msSaveOrOpenBlob
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob);
      return;
    }

    // For other browsers:
    // Create a link pointing to the ObjectURL containing the blob.
    const data = window.URL.createObjectURL(blob);
    console.log("data windows url !!!  " + JSON.stringify(data));
    var link = document.createElement('a');
    link.href = data;
    link.download="file.pdf";
    console.log("data file url !!!  " + JSON.stringify(link));
    link.click();


  }

}
