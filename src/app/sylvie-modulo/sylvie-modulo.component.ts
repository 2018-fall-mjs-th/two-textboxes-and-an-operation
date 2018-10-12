import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sylvie-modulo',
  templateUrl: './sylvie-modulo.component.html',
  styleUrls: ['./sylvie-modulo.component.css']
})
export class SylvieModuloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  remainder = 1;

  moduloNumbers() {
    this.remainder = this.dividend % this.divisor;
  }

  dividend: number = 3;
  divisor: number = 2;

}
