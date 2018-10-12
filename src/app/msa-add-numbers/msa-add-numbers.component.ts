import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msa-add-numbers',
  templateUrl: './msa-add-numbers.component.html',
  styleUrls: ['./msa-add-numbers.component.css']
})
export class MsaAddNumbersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  answer = 0;

  addNumbers() {
    this.answer = this.n1 + this.n2 + this.n3;
  }

  n1: number = 0;
  n2: number = 0;
  n3: number = 0;
}

