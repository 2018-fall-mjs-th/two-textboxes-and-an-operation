import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kcs-component',
  templateUrl: './kcs-component.component.html',
  styleUrls: ['./kcs-component.component.css']
})
export class KcsComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  answer = "NO U!";

  shoutPhrase() {
    this.answer = this.n1.toUpperCase() + " " + this.n2.toUpperCase() + "!";
  }

  n1: string = "no";
  n2: string = "u";
}
