import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aburns-string-surgery',
  templateUrl: './aburns-string-surgery.component.html',
  styleUrls: ['./aburns-string-surgery.component.css']
})
export class AburnsStringSurgeryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  finalString: string ="";
  firstString: string = "Start";
  secondString: string = "";

  spliceStrings() {
    this.finalString = this.firstString.concat(this.secondString);
    this.firstString = this.finalString;
    this.secondString = "";

  }

}
