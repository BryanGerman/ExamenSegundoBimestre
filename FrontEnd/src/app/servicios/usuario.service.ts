import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private _usuario: string;


  constructor() {
  }

  public getUsuario(){
    return this._usuario;
  }

  public setUuario(usuario: string){
    this._usuario = usuario;
  }
}
