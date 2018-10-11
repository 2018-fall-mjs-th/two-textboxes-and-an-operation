import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtract-numbers',
  templateUrl: './subtract-numbers.component.html',
  styleUrls: ['./subtract-numbers.component.css']
})
export class SubtractNumbersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  answer = 5;

  subtractNumbers() {
    this.answer = this.n1 - this.n2;
  }

  n1: number = 2;
  n2: number = 3;

}
