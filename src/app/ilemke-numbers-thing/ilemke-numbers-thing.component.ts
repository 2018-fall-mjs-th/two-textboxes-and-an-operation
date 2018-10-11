import { Component, OnInit } from '@angular/core';
import { MatrixService, MatrixService } from './mtrx.service';

@Component({
  selector: 'app-ilemke-numbers-thing',
  templateUrl: './ilemke-numbers-thing.component.html',
  styleUrls: ['./ilemke-numbers-thing.component.css']
})
export class IlemkeNumbersThingComponent implements OnInit {
  
  public countDown: number;
  public stringToReverse1: string;
  public stringToReverse2: string;
  public concatString: string;
  public showCountDown: boolean;
  public interval: any;

  constructor(private mtrx: MatrixService) { }


  ngOnInit() {
    this.showCountDown = false;
  }
  

  public reverseString() {
    clearInterval(this.interval);
    this.concatString = this.stringToReverse1 + this.stringToReverse2;
    this.countDown = 5;
    this.showCountDown = true;
    this.interval = setInterval(() => { 
      if (this.countDown >= 1) {
        this.myTimerFunction();
        this.showCountDown = true; 
      } else {
        this.showCountDown = false;
        clearInterval(this.interval);
      }
    }, 1000);
  }

  public myTimerFunction() {
    this.countDown--;
    if (this.countDown <= 0) {
      this.concatString = this.getReversedString(this.concatString);
    }
  }

  public getReversedString(stringToReverse: string) {
    return stringToReverse.split('').reverse().join('');
  }

  public initiateTheMatrix() {
    this.concatString = this.stringToReverse1 + this.stringToReverse2;
    this.mtrx.callNeo(this.concatString);
  }


  




}