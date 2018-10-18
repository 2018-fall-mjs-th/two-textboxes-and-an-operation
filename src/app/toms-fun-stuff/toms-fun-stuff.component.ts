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

    this.n1 = this.n1.split('').reverse().join("");
    this.n2 = this.n2.split('').reverse().join("");

    this.answer = this.n1 + " " + this.n2;;

    return this.answer;
  }

  n1:string = "hello";
  n2:string = "there";
}
