import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modelhijo',
  templateUrl: './modelhijo.component.html',
  styleUrls: ['./modelhijo.component.css']
})
export class ModelhijoComponent implements OnInit {
  @Input() nombre: string;
  constructor() { }

  ngOnInit() {
  }

}
