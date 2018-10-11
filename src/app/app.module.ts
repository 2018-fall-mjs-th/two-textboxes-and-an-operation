import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TjsAddNumbersComponent } from './tjs-add-numbers/tjs-add-numbers.component';
import { JlDiceRollerComponent } from './jl-dice-roller/jl-dice-roller.component';

@NgModule({
  declarations: [
    AppComponent,
    TjsAddNumbersComponent,
    JlDiceRollerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
