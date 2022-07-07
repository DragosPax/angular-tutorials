import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export class CocktailModel {
  strDrink: string;
  strDrinkThumb: string;
  id: string;
}

@Component({
  selector: 'drink-component',
  template: './cocktail.component.html',
})
export class Cocktail {
  constructor(private http: HttpClient) {}

  getDrink() {
    const response = this.http
      .get('www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007')
      .subscribe((resp) => this.showDrink(resp.drinks));
  }

  showDrink(value: CocktailModel[]) {
    value.map((drink) => console.log(drink));
  }
}
