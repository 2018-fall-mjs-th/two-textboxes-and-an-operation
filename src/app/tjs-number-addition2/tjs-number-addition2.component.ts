import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tjs-number-addition2',
  templateUrl: './tjs-number-addition2.component.html',
  styleUrls: ['./tjs-number-addition2.component.css']
})
export class TjsNumberAddition2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  answer =8;

  subtractNumbersPlusOne() {
    this.answer = this.n1 + this.n2 -1;
  }

  n1: number = 10;
  n2: number = 3;

//note
}
