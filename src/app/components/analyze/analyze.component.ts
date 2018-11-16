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
   fileToAnalize:string;
   fileList = [];
   filesToCompare = [];
   sharedFileList = [];
   filesToCompareShared = [];
   allFilesToCompare = [];
   buttonDisabled : boolean = false;
   selectedAll: boolean = false;
   selectedAllShared: boolean = false;


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
    // console.log("polo   " + this.fileToAnalize);
    this.allFilesToCompare= this.filesToCompare.concat(this.filesToCompareShared);
    console.log("ARRAY A ANALIZAR  " +   this.allFilesToCompare);



    if(this.fileToAnalize=="-1"){
      this.openModal("No se inició el analisis","Seleccione documento a analizar y vuelva a intentarlo.","error","error")
    }else
    {
      console.log("polo 2  " + this.allFilesToCompare.length);
      if(this.allFilesToCompare.length == 0){
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

  uncheckAllShared(){
    for (var i = 0; i < this.sharedFileList.length; i++) {
        this.sharedFileList[i].selected = this.selectedAllShared;
    }

    this.filesToCompareShared =[];
  }


  onSelectAll(isChecked: boolean){
    this.selectedAll = !this.selectedAll;

    if(isChecked) {
      let aux1 = <any>this.fileList;
      this.filesToCompare = aux1.map(a => a.idFile);

      for (var i = 0; i < this.fileList.length; i++) {
        console.log("  el chekbox ANTES "+  JSON.stringify( this.fileList[i]))
        console.log(" this.selectedAll "+   this.selectedAll)
          this.fileList[i].selected = this.selectedAll;
          console.log("  el chekbox DESPUES "+  JSON.stringify( this.fileList[i]))
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
  onSelectAllShared(isChecked: boolean){
    this.selectedAllShared = !this.selectedAllShared;
    console.log("selectedAllShared   "+ this.selectedAllShared)

    if(isChecked) {
      console.log("ENTRO AL IF   "+ this.selectedAllShared)
      let aux = <any>this.sharedFileList;
      this.filesToCompareShared = aux.map(a => a.idFile);

        console.log("selectedAllShared   "+ this.selectedAllShared)

      for (var i = 0; i < this.sharedFileList.length; i++) {
        console.log("  el chekbox ANTES "+  JSON.stringify( this.sharedFileList[i]))
        console.log(" this.selectedAllShared "+   this.selectedAllShared)

          this.sharedFileList[i].selected = this.selectedAllShared;
          console.log("  el chekbox DESPUES "+  JSON.stringify( this.sharedFileList[i]))
      }

    } else {
      this.uncheckAllShared();

    //   for (var i = 0; i < this.fileList.length; i++) {
    //       this.fileList[i].selected = this.selectedAll;
    //   }
    //
    //   this.filesToCompare =[];
     }
    console.log(this.filesToCompareShared)
  }

  checkIfAllSelected(){
    if (this.fileList.length == this.filesToCompare.length){
      this.selectedAll = true;
    }
    this.selectedAll = false;
  }
  checkIfAllSelectedShared(){
    console.log("all selected shared???")
    if (this.sharedFileList.length == this.filesToCompareShared.length){
      this.selectedAllShared = true;
      console.log("YES")
    }
    this.selectedAllShared = false;
    console.log("NO")
  }

  onChangeShared(id: string, isChecked: boolean) {

        if(isChecked) {
          this.filesToCompareShared.push(id);
          console.log(JSON.stringify(this.sharedFileList.length) +  "    "  + JSON.stringify(this.filesToCompareShared.length))

          if (this.sharedFileList.length == this.filesToCompareShared.length){
            console.log("SI!!! SELECCIONASTE TODOS LOS ELEMENTOS De la tabla shared")
            this.selectedAllShared = true;
          }else{
          console.log("NO!!! SELECCIONASTE TODOS LOS ELEMENTOS De la tabla shared")
          this.selectedAllShared = false;
          }

        } else {
          let index = this.filesToCompareShared.indexOf(id);
          this.filesToCompareShared.splice(index,1);
          if(this.selectedAllShared){
            this.selectedAllShared = false;
          }



        }
        console.log(this.filesToCompareShared)
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
