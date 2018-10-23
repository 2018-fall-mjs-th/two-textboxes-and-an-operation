import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rd-search-string',
  templateUrl: './rd-search-string.component.html',
  styleUrls: ['./rd-search-string.component.css']
})
export class RdSearchStringComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  closed: boolean = false;
  isMatch: boolean = null;

  checkString() {
    this.isMatch = this.stringToSearch.includes(this.searchString);
    this.closed = false;
  }
 closeAlert() {
   this.closed = true;
 }
  stringToSearch: string = "";
  searchString: string = "";
}