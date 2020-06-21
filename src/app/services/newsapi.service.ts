import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  constructor(private http: HttpClient) {}

  getArticlesTechnology(): Observable<any> {
    return this.http.get(this.techNews).pipe(map((data: any) => data.articles));
  }

  getArticlesJavascript(): Observable<any> {
    return this.http.get(this.jsNews).pipe(map((data: any) => data.articles));
  }
}
