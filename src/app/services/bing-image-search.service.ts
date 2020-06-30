import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BingImageSearchService {
  // service key
  serviceKey = '8c3b94d20c9b4076a54730ac0a271808';

  imageSearchUrl =
    'https://image-search-2.cognitiveservices.azure.com/bing/v7.0/images/search';
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
