import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http
      .get(`https://run.mocky.io/v3/43307b2a-22d9-40df-8aff-15032ae849d4`)
      .pipe(map((res) => res));
  }
}
