import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { CocktailService } from './cocktail.service';

export class CocktailModel {
  strDrink: string;
  strDrinkThumb: string;
  id: string;
}

@Component({
  selector: 'drink-component',
  templateUrl: './cocktail.component.html',
})
export class Cocktail {

  @Input() val:string

  constructor(
    private http: HttpClient,
    private cocktailService: CocktailService
  ) {}
  getDrink() {
    const response = this.cocktailService
      .getCocktail()
      .subscribe((resp) => this.showDrink(resp.drinks));
  }
  showDrink(value: CocktailModel[]) {
    value.map((drink) => console.log(drink));
  }
}
