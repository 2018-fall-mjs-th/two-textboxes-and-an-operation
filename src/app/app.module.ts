import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TjsAddNumbersComponent } from './tjs-add-numbers/tjs-add-numbers.component';
import { TjsNumberAddition2Component } from './tjs-number-addition2/tjs-number-addition2.component';

@NgModule({
  declarations: [
    AppComponent,
    TjsAddNumbersComponent,
    TjsNumberAddition2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
