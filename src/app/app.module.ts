import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GetDrink } from './id.component';
import { Cocktail } from './cocktail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,GetDrink,Cocktail ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
