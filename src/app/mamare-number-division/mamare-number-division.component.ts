import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mamare-number-division',
  templateUrl: './mamare-number-division.component.html',
  styleUrls: ['./mamare-number-division.component.css']
})
export class MamareNumberDivisionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  answer = 0;

  divideNumbers() {
    this.answer = this.n1 / this.n2; 
  }

  n1: number = 0;
  n2: number = 0;

  currentRate = 8;
}

