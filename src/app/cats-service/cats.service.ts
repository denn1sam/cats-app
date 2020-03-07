import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cat } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(private readonly http: HttpClient) {
  }

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>('https://api.thecatapi.com/v1/images/search');
  }
}
