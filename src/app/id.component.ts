import { Component } from '@angular/core';
import { CocktailService } from './cocktail.service';

@Component({
  selector: 'id-component',
  templateUrl: './id.component.html',
})
export class GetDrink {
  name = 'something';
  constructor(private service: CocktailService) {}

  getId() {
    const id = document.getElementById('input-one').value;
    this.service.getCocktail(id).subscribe((resp) => console.log(resp));
  }
}
