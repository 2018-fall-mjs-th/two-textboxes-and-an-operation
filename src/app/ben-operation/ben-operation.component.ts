import { Component, OnInit } from '@angular/core';
import { createElement } from '@angular/core/src/view/element';

@Component({
  selector: 'app-ben-operation',
  templateUrl: './ben-operation.component.html',
  styleUrls: ['./ben-operation.component.css']
})
export class BenOperationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  answer = 6;

  mysteryOperation() {
    this.answer = this.n3 % this.n4 
  }

  n3: number = 2;
  n4: number= 3;
  getOperation() {
      let h2 = document.createElement("h2");
      let div = document.getElementById("operation");
      let h2Message = document.createTextNode("Modulo!!!! (%)");

      h2.appendChild(h2Message);
      div.appendChild(h2);
  }
}
