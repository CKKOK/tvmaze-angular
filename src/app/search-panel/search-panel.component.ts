import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {
  search = {
    query: '',
  };

  getShows(): void {
    let toSearch = null;
    let page = 0;
    if (this.search.query === '') {
      toSearch = 'http://api.tvmaze.com/shows?page=1';
      page = 1;
    } else {
      toSearch = 'http://api.tvmaze.com/search/shows?q=' + encodeURIComponent(this.search.query);
    }
    this.searchService.getResults(toSearch, page, () => {
      this.router.navigate(['results']);
    });
  }
  onChange(): void {
    // to get rid of this;
  }

  onSubmit(): void {
    this.getShows();
  }

  constructor(
    private searchService: SearchService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
