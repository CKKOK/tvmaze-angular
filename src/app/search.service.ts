import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchResults = [];
  page: number;

  getResults(url, page, callback): void {
    this.page = page;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.searchResults = data;
        callback();
      });
  }

  constructor() { }
}
