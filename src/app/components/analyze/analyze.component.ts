import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/file.service';
import { AnalyzeService } from '../../services/analyze.service';
import { HttpClient} from '@angular/common/http'
import { Router,Routes, RouterModule} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { NgbModal,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
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
   sharedFileList = false;
   buttonDisabled : boolean = false;
   selectedAll: any;


   constructor(
    private analyzeService: AnalyzeService,
    private fileService: FileService,
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private modalService: NgbModal

  ) {

    this.fileToAnalize = '-1';
    this.getAllUserFiles();
    this.getSharedFiles();


  }

  doAnalysis(){
          this.analyzeService.iniciarAnalisis(this.fileToAnalize,this.filesToCompare).subscribe(res=>{
            console.log("ANALISIS   " + JSON.stringify(res));
            this.openModal("Analisis Iniciado","Podes ver el estado de este y otros analisis en la pestaña Reportes.","success","success")
            this.uncheckAll();
          });
  }

  onSubmit(){
    console.log("polo   " + this.fileToAnalize);
    if(this.fileToAnalize=="-1"){
      this.openModal("No se inició el analisis","Seleccione documento a analizar y vuelva a intentarlo.","error","error")
    }else
    {
      console.log("polo 2  " + this.filesToCompare.length);
      if(this.filesToCompare.length == 0){
        this.openModal("No se inició el analisis","Seleccione 1 o mas archivos de la lista para comparar y vuelva a intentarlo.","error","error")

      }else{
        this.openModal("¿Esta seguro de querer iniciar el analisis?","Haga click en 'Confirmar' para iniciar el analisis o en 'Cerrar' para cancelar la accion","confirm","analyze")


      }
    }
  }

  ngOnInit() {
    // this.fileToAnalize = '-1';
    // this.getAllUserFiles();
    // this.getSharedFiles();
  }


  uncheckAll(){
    for (var i = 0; i < this.fileList.length; i++) {
        this.fileList[i].selected = this.selectedAll;
    }

    this.filesToCompare =[];
  }

  onSelectAll(isChecked: boolean){
    this.selectedAll = !this.selectedAll;

    if(isChecked) {
      let aux = <any>this.fileList;
      this.filesToCompare = aux.map(a => a.idFile);

      for (var i = 0; i < this.fileList.length; i++) {
          this.fileList[i].selected = this.selectedAll;
      }

    } else {
      this.uncheckAll();

    //   for (var i = 0; i < this.fileList.length; i++) {
    //       this.fileList[i].selected = this.selectedAll;
    //   }
    //
    //   this.filesToCompare =[];
     }
    console.log(this.filesToCompare)
  }

  checkIfAllSelected(){
    if (this.fileList.length == this.filesToCompare.length){
      this.selectedAll = true;
    }
    this.selectedAll = false;
  }

  onChange(id: string, isChecked: boolean) {

    //Check if all is Selected


        if(isChecked) {
          this.filesToCompare.push(id);
          console.log(JSON.stringify(this.fileList.length) +  "    "  + JSON.stringify(this.filesToCompare.length))

          if (this.fileList.length == this.filesToCompare.length){
            console.log("SI!!! SELECCIONASTE TODOS LOS ELEMENTOS")
            this.selectedAll = true;
          }else{
          console.log("NO!!! SELECCIONASTE TODOS LOS ELEMENTOS")
          this.selectedAll = false;
          }

        } else {
          let index = this.filesToCompare.indexOf(id);
          this.filesToCompare.splice(index,1);
          if(this.selectedAll){
            this.selectedAll = false;
          }



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
      if (JSON.stringify(res['result'])!= "[]"){
        this.fileList =  res['result'];
         console.log("PROBANDO!" + JSON.stringify(res['result']));
         console.log("PROBANDO!" + res['result'].length);

        this.fileList.forEach(function(obj) { obj.selected = false });


        // for(let i = 0 ;i < res['result'].length;i++){
        //   this.names.push({ name : JSON.stringify(res['result'][i].idFile), selected : false })
        // }
        // console.log("testeo    " + JSON.stringify(this.names));


      }
      console.log("lista files " + JSON.stringify(this.fileList));
    });
  }

  getSharedFiles(){
    this.fileService.getSharedFiles(sessionStorage.getItem('email'),sessionStorage.getItem('token'))
    .subscribe(res => {

      if (JSON.stringify(res['result'])!= "[]"){
        this.sharedFileList =  res['result'];
      }
      console.log("lista shared" + this.sharedFileList);
    });
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
    modalRef.componentInstance.action = action;

    modalRef.result.then((result) => {
      console.log("resultados del modal  "+ result);
      if(result=="analyze"){
        this.doAnalysis()

      }
    }).catch((error) => {
      console.log(error);
    });
  }

}
