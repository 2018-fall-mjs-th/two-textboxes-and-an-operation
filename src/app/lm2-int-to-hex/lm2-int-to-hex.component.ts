import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lm2-int-to-hex',
  templateUrl: './lm2-int-to-hex.component.html',
  styleUrls: ['./lm2-int-to-hex.component.css']
})
export class Lm2IntToHexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  convertNumbers = () => {
    this.answer1 = parseInt(this.n1, 10).toString(16);
    this.answer2 = parseInt(this.n2, 10).toString(2);
  }

 answer1 = "";
 answer2 = "";

 n1;
 n2;

}
