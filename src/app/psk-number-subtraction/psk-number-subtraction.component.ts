import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-psk-number-subtraction',
  templateUrl: './psk-number-subtraction.component.html',
  styleUrls: ['./psk-number-subtraction.component.css']
})
export class PskNumberSubtractionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  answer = 4;

  subtractNumbers() {
    this.answer = this.n1 - this.n2;
  }

  n1: number = 7;
  n2: number = 3;
}

