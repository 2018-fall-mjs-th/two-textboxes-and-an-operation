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

  isMatch = false;

  checkString() {
    this.isMatch = this.stringToSearch.includes(this.searchString);
  }

  stringToSearch: string = "String To Search";
  searchString: string = "Search Value";
}
