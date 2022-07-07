import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CocktailService {
  constructor(private http: HttpClient) {}

  getCocktail(id: string): Observable<any> {
    const url =
      'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id;
    console.log('id', url);
    console.log(typeof url);
    return this.http.get(url);
  }
}
