import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gwb-number-multiplication',
  templateUrl: './gwb-number-multiplication.component.html',
  styleUrls: ['./gwb-number-multiplication.component.css']
})
export class GwbNumberMultiplicationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  answer = 6;

  addNumbers() {
    this.answer = this.n1 * this.n2;
  }
  //yup
  n1: number = 2;
  n2: number = 3;
}
