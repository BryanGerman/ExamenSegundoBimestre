import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {IntercambioInformacionService} from "../servicios/intercambio-informacion.service";
@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  @Input() nombreBoton:string
  @Output() avisoDeClick: EventEmitter<string> =
    new EventEmitter();

  constructor(private _intercambio: IntercambioInformacionService) {
  }
  ngOnInit() {
  }
  ejecutarDioClick() {
    this._intercambio.setConfirmacion(true);
    this.avisoDeClick.emit("" +this._intercambio.getConfirmacion())
  }

}
