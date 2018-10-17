import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toms-fun-stuff',
  templateUrl: './toms-fun-stuff.component.html',
  styleUrls: ['./toms-fun-stuff.component.css']
})
export class TomsFunStuffComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  answer = "ereht olleh";

  reverseString(str:string) {

    
    str.split("").reverse().join(" ");

    return this.answer = this.n1 + this.n2;
  }

  n1:string = "hello";
  n2:string = "there";
}
