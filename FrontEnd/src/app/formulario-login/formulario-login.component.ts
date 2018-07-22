import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {UsuarioService} from "../servicios/usuario.service";
@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {
  correoElectronico;
  contrasena;

  constructor(private router: Router, private _usuarioServicio: UsuarioService) { }
  ngOnInit() {
  }
  loginUsuario(formulario) {
    const controles = formulario.controls;
    const contrasena = controles.contrasena.value;
    const correo = controles.correoElectronico.value;
    if (correo == 'bryanglema2@gmail.com' && contrasena == '12345678') {
      //alert('bien');
      this._usuarioServicio.setUuario(correo);
      this.router.navigate(['principal'])
    } else {
      this.contrasena = undefined;
        alert('Los passwords no son iguales');
    }
  }
}
