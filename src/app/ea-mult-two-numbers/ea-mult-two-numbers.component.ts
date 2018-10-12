import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ea-mult-two-numbers',
  templateUrl: './ea-mult-two-numbers.component.html',
  styleUrls: ['./ea-mult-two-numbers.component.css']
})
export class EaMultTwoNumbersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  answer = '?';

  multNumbers() {
    this.answer = this.n1 * this.n2;
  }

  n1: number = 2;
  n2: number = 3;
}
