import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  readonly apiKey = 'deokzgUjxm6QHQdp3H3aca1LSZcCpucc';
  readonly baseUrl = 'https://api.giphy.com/v1';
  constructor(private http: HttpClient) { }

  search(q): Observable<any> {
    const params = {api_key: this.apiKey, q, limit: '25', offset: '0', rating: 'Y', lang: 'en'};
    return this.http.get(`${this.baseUrl}/gifs/search`, {params});
  }
}
