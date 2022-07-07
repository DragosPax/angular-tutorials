import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  val: string;
  notificare: string;
  onNotify(val: string) {
    console.log(val);
    this.notificare = val;
  }
}
