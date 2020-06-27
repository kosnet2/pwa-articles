import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BingImageSearchService {
  // service key
  serviceKey = '632a196943ed45ce9e1f1a9a9ee26b15';

  imageSearchUrl =
    'https://api.cognitive.microsoft.com/bing/v7.0/images/search';
  constructor(private http: HttpClient) {}

  getImageByTitle(title: string, count: number): Observable<any> {
    // set headers
    let headers = new HttpHeaders().set(
      'Ocp-Apim-Subscription-Key',
      this.serviceKey
    );
    headers.append('Accept', 'application/json');

    // set params
    let params = new HttpParams().set('q', title);
    params.append('count', count.toString());

    return this.http.get(this.imageSearchUrl, {
      headers: headers,
      params: params,
    });
  }
}
