import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  role: string;
  cantArchivos;
  cantAnalisis;
  cantAnalisisTerminados;
  cantUsuariosDelSistema;
  cantArchivosCarpetaCompartida;
  cantArchivosEnElSistema;

  constructor(
  private homeService: HomeService

  ) { }

  ngOnInit() {
    console.log("role Nuevo " + this.role );
    this.role = sessionStorage.getItem('role');
    console.log("role Nuevo2 " + this.role );
    this.getDashBoard();

  }

  private getDashBoard(){

    this.homeService.getDashBoard(sessionStorage.getItem('email'),sessionStorage.getItem('token')).subscribe(res => {
    this.cantArchivos = res['result'][0].cantArchivos;
    this.cantAnalisis = res['result'][0].cantAnalisis;
    this.cantAnalisisTerminados = res['result'][0].cantAnalisisTerminados;
    this.cantUsuariosDelSistema = res['result'][0].cantUsuariosDelSistema;
    this.cantArchivosCarpetaCompartida = res['result'][0].cantArchivosCarpetaCompartida;
    this.cantArchivosEnElSistema = res['result'][0].cantArchivosEnElSistema;
    });

  }

}
