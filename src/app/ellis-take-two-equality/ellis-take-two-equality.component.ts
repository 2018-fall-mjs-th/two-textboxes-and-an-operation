import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ellis-take-two-equality',
  templateUrl: './ellis-take-two-equality.component.html',
  styleUrls: ['./ellis-take-two-equality.component.css']
})
export class EllisTakeTwoEqualityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  n1: number = 2;
  n2: number = 4;
  answer: string = "false";

  checkForEquality() {
    if (this.n1 == this.n2) {
      this.answer = "true";
    } else {
      this.answer = "false";
    }
  }

}
