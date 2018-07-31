import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public searchQuery: string;
  public onSearch(searchQuery: string, searchEngine: string) {
    if (searchQuery === undefined || searchEngine === undefined) {
      alert("Введите запрос для поиска и укажите поисковую систему")
    }
    else if (searchEngine == 'google' && searchQuery !== undefined) {
      window.location.href = 'https://www.google.com/search?q=' + searchQuery + '&newwindow=1';
    }
    else if(searchEngine == 'bing' && searchQuery !== undefined) {
      window.location.href = 'https://www.bing.com/search?q=' + searchQuery + '&qs=n&form=QBLH&sp=-1&pq=' + searchQuery + '&sc=8-3&sk=&cvid=4757EC36179647C0B3D4233A148272B8';
    }
    else if(searchEngine == 'ask' && searchQuery !== undefined) {
      window.location.href = 'https://uk.ask.com/web?q=' + searchQuery + '&qsrc=0&o=0&l=dir&qo=homepageSearchBox';
    }
  }
}