import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon.model';

export interface ApiResponse {
  data: {
    queryPokemon: Pokemon[];
  }
  extensions: any;
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  baseUrl = `https://throbbing-field-440010.us-west-2.aws.cloud.dgraph.io/graphql`;
  headers = new HttpHeaders().append('Content-Type', 'application/json')
  constructor(private http: HttpClient) {}

  fetchGraphGL(operationsDoc: any, operationsName: string, variables: any) {
    const body = JSON.stringify({
      query: operationsDoc,
      operationsName,
      variables,
    });

    return this.http.post<ApiResponse>(this.baseUrl, body, { headers: this.headers});
  }


}
