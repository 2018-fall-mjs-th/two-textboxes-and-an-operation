import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TjsAddNumbersComponent } from './tjs-add-numbers/tjs-add-numbers.component';
import { EaMultTwoNumbersComponent } from './ea-mult-two-numbers/ea-mult-two-numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    TjsAddNumbersComponent,
    EaMultTwoNumbersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
