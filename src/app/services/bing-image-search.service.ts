import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';

import { tap } from 'rxjs/operators';
// import * as imagesearch from '@azure/cognitiveservices-imagesearch';
// import * as cognitive from 'ms-rest-azure';
import { Observable } from 'rxjs';
// import { CognitiveServicesCredentials } from 'ms-rest-azure';
// const CognitiveServicesCredentials = require('ms-rest-azure')
// .CognitiveServicesCredentials;

@Injectable({
  providedIn: 'root',
})
export class BingImageSearchService {
  serviceKey = '632a196943ed45ce9e1f1a9a9ee26b15';

  //the search term for the request
  searchTerm = 'canadian rockies';

  //instantiate the image search client

  constructor(private http: Http) {}

  sayHello() {
    // let credentials = new CognitiveServicesCredentials(this.serviceKey);
    // let imageSearchApiClient = new imagesearch.ImageSearchClient(credentials);

    // let headers = new Headers();
    // headers.append('Ocp-Apim-Subscription-Key', this.serviceKey);

    // http rquest
    // this.http.get(url, opts).subscribe(
    //   (res) => console.log(res.json()),
    //   (msg) => console.error(`Error: ${msg.status} ${msg.statusText}`)
    // );

    // let customHeaders = new Headers({
    //   'Ocp-Apim-Subscription-Key': this.serviceKey,
    // });
    // let requestOptions: RequestOptionsArgs = {
    //   headers: customHeaders,
    // };
    // // here your url
    // let url = 'https://api.cognitive.microsoft.com/bing/v7.0/images?';
    // //  '&customconfig=' +
    // //  customConfigId;
    // this.http.get(url, requestOptions).subscribe(
    //   (res) => console.log(res.json()),
    //   (msg) => console.error(`Error: ${msg.status} ${msg.statusText}`)
    // );
    console.log('hello');
  }
}
