import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, forkJoin, ObservableInput } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { BingImageSearchService } from './bing-image-search.service';

@Injectable({
  providedIn: 'root',
})
export class NewsapiService {
  bestStories =
    'https://hacker-news.firebaseio.com/v0/beststories.json?orderBy="$key"&limitToFirst=30';

  jobStories =
    'https://hacker-news.firebaseio.com/v0/jobstories.json?orderBy="$key"&limitToFirst=30';

  base_url = 'https://hacker-news.firebaseio.com/v0/item/';

  default_image_url = 'assets/default-image.jpg';

  constructor(private http: HttpClient, private injector: Injector) {}

  getBestStories(): Observable<any> {
    //this.injector.get(BingImageSearchService).getImageByTitle();

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

  getImageByTitle(title: string): Observable<any> {
    return this.injector.get(BingImageSearchService).getImageByTitle(title, 5);
  }

  getDefaultImage(): string {
    return this.default_image_url;
  }
}
