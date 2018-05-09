import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { SearchResultComponent } from '../search-result/search-result.component';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-results-panel',
  templateUrl: './results-panel.component.html',
  styleUrls: ['./results-panel.component.css']
})
export class ResultsPanelComponent implements OnInit, OnDestroy {
  results: Array<Object>;
  page: number;
  fetching: boolean;
  goBack(): void {
    this.location.back();
  }
  constructor(
    private location: Location,
    private search: SearchService
  ) {
    this.onScroll = this.onScroll.bind(this);
  }

  onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !this.fetching) {
      this.fetching = true;
      this.page++;
      fetch('http://api.tvmaze.com/shows?page=' + (this.page).toString())
        .then((response) => response.json())
        .then((data) => {
          this.fetching = false;
          this.results = this.results.concat(data);
        });
    }
  }

  ngOnInit(): void {
    this.results = this.search.searchResults;
    this.page = this.search.page;
    console.log(this.results);
    console.log(this.page);
    if (this.page > 0) {
      window.addEventListener('scroll', this.onScroll, false);
    }
  }

  ngOnDestroy(): void {
    if (this.page > 0) {
      window.removeEventListener('scroll', this.onScroll, false);
    }
  }
}
