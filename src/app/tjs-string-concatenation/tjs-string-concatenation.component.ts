import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tjs-string-concatenation',
  templateUrl: './tjs-string-concatenation.component.html',
  styleUrls: ['./tjs-string-concatenation.component.css']
})
export class TjsStringConcatenationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  answer: string = "Hello World";

  s1: string = "Hello";
  s2: string = "World";


  concatWithSpace() {
    this.answer = this.s1 + " " + this.s2;
  }
}
