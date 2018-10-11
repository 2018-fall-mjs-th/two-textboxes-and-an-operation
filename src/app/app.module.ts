import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TjsAddNumbersComponent } from './tjs-add-numbers/tjs-add-numbers.component';
import { MamareNumberDivisionComponent } from './mamare-number-division/mamare-number-division.component';

@NgModule({
  declarations: [
    AppComponent,
    TjsAddNumbersComponent,
    MamareNumberDivisionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
