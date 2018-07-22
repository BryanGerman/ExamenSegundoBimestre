import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modelpapa',
  templateUrl: './modelpapa.component.html',
  styleUrls: ['./modelpapa.component.css']
})
export class ModelpapaComponent implements OnInit {
  @Input() nombre: string;
  @Input() urlImagen: string;
  constructor() { }

  ngOnInit() {
  }

}
