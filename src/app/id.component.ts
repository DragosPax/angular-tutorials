import { Component } from '@angular/core';

@Component({
  selector: 'id-component',
  templateUrl: './id.component.html',
})
export class GetDrink {
  name = 'something';

  getId() {
    const id=document.getElementById('input-one').value;
  }
}
