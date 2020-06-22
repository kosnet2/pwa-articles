import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UnsplashApiService {
  accessKey = 'JWXuiiHsWxmMSN2ge9MFXOmAjI7rBG7dCHpNdce_5Q0';
  secretKey = 'x7k7bgLwm477jdh92X5DhUCUxmYb7iJC2UgVjQKcksA';

  constructor(private http: HttpClient) {}
}
