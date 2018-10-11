import { Component, OnInit } from '@angular/core';
import { MatrixService } from './mtrx.service';

@Component({
  selector: 'app-ilemke-numbers-thing',
  templateUrl: './ilemke-numbers-thing.component.html',
  styleUrls: ['./ilemke-numbers-thing.component.css']
})
export class IlemkeNumbersThingComponent implements OnInit {
  
  public myMatrixString1: string;
  public myMatrixString2: string;
  public interval: any;

  constructor(private mtrx: MatrixService) { }


  ngOnInit() {}
  

  /**
   * Initiate the Matrix!
   * Passes the given input into the matrix ... for 5 seconds
   */
  public initiateTheMatrix() {
    clearInterval(this.interval);
    let concatString = this.myMatrixString1 + this.myMatrixString2;
    let remainingDuration = 4; // 4 seconds, then screen will clear
    this.mtrx.callNeo(concatString); // Call the Matrix

    this.interval = setInterval(() => { 
      if (remainingDuration > 1) {
        remainingDuration--;
      } else {
        this.breakOutOfTheMatrix();
        clearInterval(this.interval);
      }
    }, 1000);

  }


  public breakOutOfTheMatrix() {
    console.log('Breaking out of the Matrix!');
    let elem = document.getElementById('matrixNode');
    let childNodes = [ elem.childNodes ];
    elem.childNodes.forEach(aChildNode => {
      this.fadeElement(aChildNode);
    });
  }

  /**
   * Lower the given element's opacity until zero, then remove it. 
   */
  public fadeElement(elem) {
    let opacity = 1;
    let interval = setInterval(function () {
      if (opacity <= 0.1) {
        clearInterval(interval);
        elem.style.display = "none";
      }
      elem.style.opacity = opacity;
      elem.style.filter = `alpha(opacity= + ${ opacity } * 100 + )`;
      opacity -= opacity * 0.1;
    }, 50);
  }

}