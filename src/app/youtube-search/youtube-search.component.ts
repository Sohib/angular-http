import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../search-result/search-result.modal';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css']
})
export class YoutubeSearchComponent implements OnInit {
  results: SearchResult[];
  loading: boolean;

  constructor() { }

  ngOnInit() {
  }


  updateResults(results: SearchResult[]) {
    this.results = results;
  }

}
