import { Component, OnInit } from '@angular/core';
import { sendRequest } from 'selenium-webdriver/http';

@Component({
  selector: 'two-text-boxes-and-adrop-down',
  templateUrl: './two-text-boxes-and-adrop-down.component.html',
  styleUrls: ['./two-text-boxes-and-adrop-down.component.css']
})
export class TwoTextBoxesAndADropDownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


answer: number = Math.sqrt(Math.pow(6, 6));
 

  addNumbers() {
    this.answer = Math.sqrt(Math.pow(this.n1 , this.n2));
  }

  n1: number = 6;
  n2: number = 6;

  
}
