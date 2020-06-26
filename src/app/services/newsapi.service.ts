import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, forkJoin, ObservableInput } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { BingImageSearchService } from './bing-image-search.service';

@Injectable({
  providedIn: 'root',
})
export class NewsapiService {
  key = '1c49507649114ce3a6e3fc4fdaf73fe1';
  jsNews =
    'https://newsapi.org/v2/everything?q=javascript&sortBy=latest&apiKey=' +
    this.key;
  techNews =
    'https://newsapi.org/v2/top-headlines?category=technology&language=en&country=us&apiKey=' +
    this.key;

  bestStories =
    'https://hacker-news.firebaseio.com/v0/beststories.json?orderBy="$key"&limitToFirst=30';

  jobStories =
    'https://hacker-news.firebaseio.com/v0/jobstories.json?orderBy="$key"&limitToFirst=30';

  base_url = 'https://hacker-news.firebaseio.com/v0/item/';

  constructor(private http: HttpClient, private injector: Injector) {}

  getArticlesTechnology(): Observable<any> {
    return this.http.get(this.techNews).pipe(map((data: any) => data.articles));
  }

  getArticlesJavascript(): Observable<any> {
    return this.http.get(this.jsNews).pipe(map((data: any) => data.articles));
  }

  getBestStories(): Observable<any> {
    this.injector.get(BingImageSearchService).sayHello();

    return this.http
      .get(this.bestStories)
      .pipe(
        mergeMap((ids: []) =>
          forkJoin(ids.map((id) => this.http.get(`${this.base_url}${id}.json`)))
        )
      );
  }

  getJobStories(): Observable<any> {
    return this.http
      .get(this.jobStories)
      .pipe(
        mergeMap((ids: []) =>
          forkJoin(ids.map((id) => this.http.get(`${this.base_url}${id}.json`)))
        )
      );
  }

  getCommentsByIds(ids: Array<any>): Observable<any> {
    return forkJoin(
      ids
        .slice(0, Math.min(100, ids.length))
        .map((id) => this.http.get(`${this.base_url}${id}.json`))
    );
  }
}
