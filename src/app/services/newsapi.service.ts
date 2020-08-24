import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NewsapiService {
  hn_base_url = 'https://hacker-news.firebaseio.com/v0/item/';
  base_url = 'https://whispering-tundra-51561.herokuapp.com/';
  askStories = this.base_url + 'askStories';
  bestStories = this.base_url + 'bestStories';
  jobStories = this.base_url + 'jobStories';
  newStories = this.base_url + 'newStories';
  showStories = this.base_url + 'showStories';
  topStories = this.base_url + 'topStories';

  constructor(private http: HttpClient) {}

  getAskStories(): Observable<any> {
    return this.http.get(this.askStories);
  }

  getBestStories(): Observable<any> {
    return this.http.get(this.bestStories);
  }

  getJobStories(): Observable<any> {
    return this.http.get(this.jobStories);
  }

  getNewStories(): Observable<any> {
    return this.http.get(this.newStories);
  }

  getShowStories(): Observable<any> {
    return this.http.get(this.showStories);
  }

  getTopStories(): Observable<any> {
    return this.http.get(this.topStories);
  }

  getArticles(type: string): Observable<any> {
    if (type === 'askStories') return this.getAskStories();
    if (type === 'bestStories') return this.getBestStories();
    if (type === 'jobStories') return this.getJobStories();
    if (type === 'newStories') return this.getNewStories();
    if (type === 'showStories') return this.getShowStories();
    if (type === 'topStories') return this.getTopStories();
    return this.getBestStories();
  }

  getCommentsByIds(ids: Array<any>): Observable<any> {
    return forkJoin(
      ids
        .slice(0, Math.min(100, ids.length))
        .map((id) => this.http.get(`${this.hn_base_url}${id}.json`))
    ).pipe(
      map((comments) => {
        return comments.sort((a, b) => {
          let repliesA = a['kids'] !== undefined ? a['kids'].length : 0;
          let repliesB = b['kids'] !== undefined ? b['kids'].length : 0;
          return repliesB - repliesA;
        });
      })
    );
  }
}
