import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jl-dice-roller',
  templateUrl: './jl-dice-roller.component.html',
  styleUrls: ['./jl-dice-roller.component.css']
})
export class JlDiceRollerComponent implements OnInit {

  quantity: number = 1;
  size: number = 6;
  answer: any = "";
  error: string = "";

  constructor() { }

  ngOnInit() {
  }

  rollDice() {
    if (this.quantity <= 0 || this.size <= 0
      || this.quantity%1 != 0 || this.size%1 != 0) {
      this.answer = "";
      this.error = "Both fields must contain non-zero, positive integers.";
    } else {
      let sum = 0;
      for (let i = 0; i < this.quantity; i++) {
        sum += Math.ceil((Math.random() * this.size));
      }
      this.answer = sum;
      this.error = "";
    }
  }

}
