import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../servicios/usuario.service";

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private _usuarioService: UsuarioService) { }
  usuario: string;
  ngOnInit() {
    this.usuario = this._usuarioService.getUsuario();
  }

}
