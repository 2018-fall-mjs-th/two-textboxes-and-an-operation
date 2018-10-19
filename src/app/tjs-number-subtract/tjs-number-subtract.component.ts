import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tjs-number-subtract',
  templateUrl: './tjs-number-subtract.component.html',
  styleUrls: ['./tjs-number-subtract.component.css']
})
export class TjsNumberSubtractComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  n1: number = 2;
  n2: number = 3;

  answer = this.n1-this.n2;
  
  subNumbers() {
    this.answer = this.n1 - this.n2;
  }

  isCollapsed = true;
 
}
