import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mkc-power',
  templateUrl: './mkc-power.component.html',
  styleUrls: ['./mkc-power.component.css']
})
export class MkcPowerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  powa = 8
  
 powaNumbers() {
    this.powa = Math.pow(this.x, this.y);
  }

  x: number = 2;
  y: number = 3;

}
