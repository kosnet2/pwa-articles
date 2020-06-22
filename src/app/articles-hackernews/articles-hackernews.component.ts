import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-articles-hackernews',
  templateUrl: './articles-hackernews.component.html',
  styleUrls: ['./articles-hackernews.component.css'],
})
export class ArticlesHackernewsComponent implements OnInit {
  objectKeys = Object.keys;
  articles$: Observable<any>;

  constructor(private newsapi: NewsapiService) {}

  ngOnInit(): void {
    this.articles$ = this.newsapi.getBestStories();
    // this.newsapi.getBestStories().subscribe((a) => console.log(a));
    // this.articles$ =
  }
}
