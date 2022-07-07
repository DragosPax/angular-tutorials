import { Component, EventEmitter, Output } from '@angular/core';
import { CocktailModel } from './cocktail.component';
import { CocktailService } from './cocktail.service';

@Component({
  selector: 'id-component',
  templateUrl: './id.component.html',
})
export class GetDrink {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  name = 'something';
  cocktail: string;
  constructor(private service: CocktailService) {}

  getId() {
    const id = document.getElementById('input-one').value;
    this.service.getCocktail(id).subscribe((resp) => this.showCocktail(resp));
    this.notify.emit(this.cocktail);
  }
  showCocktail(resp) {
    this.cocktail = resp.drinks[0].strDrink;
    console.log(this.cocktail);
    document.getElementById('cocktail').innerText = this.cocktail;
  }
}
