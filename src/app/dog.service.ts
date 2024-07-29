import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface DogResponse {
  message: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class DogService {

  baseUrl = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) { }

  getDogs() {
    return this.http.get<DogResponse>(this.baseUrl);
  }
}
