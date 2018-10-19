import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tjs-add-numbers',
  templateUrl: './tjs-add-numbers.component.html',
  styleUrls: ['./tjs-add-numbers.component.css']
})
export class TjsAddNumbersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  answer = 5;

  addNumbers() {
    this.answer = this.n1 + this.n2;
  }

  n1: number = 2;
  n2: number = 3;
}
