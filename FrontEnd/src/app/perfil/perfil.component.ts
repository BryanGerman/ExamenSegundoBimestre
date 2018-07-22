import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import {IntercambioInformacionService} from "../servicios/intercambio-informacion.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  // Propiedades
  @Input() nombre: string;
  @Input() urlImagen: string;
  @Input() id: number;
  @Output() enviaUltimoId: EventEmitter<number> =
    new EventEmitter();

  constructor( private _intercambioInformacion: IntercambioInformacionService) {
  }

  ngOnInit() {
    this._intercambioInformacion.setUltimoUsuario(this.id)
  }

  emitirUltimoId(){

    console.log(this._intercambioInformacion.getUltimoIdMostrado())
    this.enviaUltimoId.emit(this._intercambioInformacion.getUltimoIdMostrado())
  }
}
