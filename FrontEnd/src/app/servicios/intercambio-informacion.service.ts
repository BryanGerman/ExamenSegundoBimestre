import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntercambioInformacionService {
  private _confirmacion: boolean;
  private _ultimoUsuario: number;
  constructor() { }
  public getConfirmacion(){
    return this._confirmacion;
  }
  public setConfirmacion(confirmacion: boolean){
    this._confirmacion = confirmacion;
  }

  public getUltimoIdMostrado(){
    return this._ultimoUsuario;

  }
  public setUltimoUsuario(ultimoUsuario: number){
    return this._ultimoUsuario = ultimoUsuario;
  }


}
