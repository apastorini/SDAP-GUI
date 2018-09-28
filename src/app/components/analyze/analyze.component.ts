import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/file.service';
import { AnalyzeService } from '../../services/analyze.service';
import { HttpClient} from '@angular/common/http'
import { Router,Routes, RouterModule} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../utils/modal/modal.component';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: []
})
export class AnalyzeComponent implements OnInit {
   fileList = [];
   fileToAnalize:string;
   filesToCompare = [];
   sharedFileList = [];

   constructor(
    private analyzeService: AnalyzeService,
    private fileService: FileService,
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private modalService: NgbModal
  ) { }

  doAnalysis(){
          this.analyzeService.iniciarAnalisis(this.fileToAnalize,this.filesToCompare).subscribe(res=>{
            console.log("ANALISIS   " + JSON.stringify(res));
            this.openModal("Analisis Iniciado","Podes ver el estado de este y otros analisis en la pestaña Reportes.","assets/img/green.png")

          });
  }

  onSubmit(){
    console.log("polo   " + this.fileToAnalize);
    if(this.fileToAnalize=="-1"){
      this.openModal("No se inició el analisis","Seleccione Archivo a analizar.","assets/img/red.png")

      alert("Seleccione Archivo a analizar");
    }else
    {
      console.log("polo 2  " + this.filesToCompare.length);
      if(this.filesToCompare.length == 0){
        this.openModal("No se inició el analisis","Seleccione 1 o mas archivos de la lista para comparar.","assets/img/red.png")

      }else{
          this.doAnalysis();

      }
    }
  }

  ngOnInit() {
    this.fileToAnalize = '-1';
    this.getAllUserFiles();
    this.getSharedFiles();
  }


  onChange(id: string, isChecked: boolean) {
        if(isChecked) {
          this.filesToCompare.push(id);
        } else {
          let index = this.filesToCompare.indexOf(id);
          this.filesToCompare.splice(index,1);
        }
        console.log(this.filesToCompare)

    }

   onOptionSelected(event){
     console.log(event.target.value);
     this.fileToAnalize = event.target.value;
   }



  getAllUserFiles(){
    this.fileService.userFilesList(sessionStorage.getItem('email'),sessionStorage.getItem('token'))
    .subscribe(res => {
      this.fileList =  res['result'];
      console.log("lista files " + JSON.stringify(this.fileList));
    });
  }

  getSharedFiles(){
    this.fileService.getSharedFiles(sessionStorage.getItem('email'),sessionStorage.getItem('token'))
    .subscribe(res => {
      this.sharedFileList =  res['result'];
      console.log("lista shared" + JSON.stringify(this.sharedFileList));
    });
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
