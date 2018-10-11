import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TjsAddNumbersComponent } from './tjs-add-numbers/tjs-add-numbers.component';
import { TjsStringConcatenationComponent } from './tjs-string-concatenation/tjs-string-concatenation.component';

@NgModule({
  declarations: [
    AppComponent,
    TjsAddNumbersComponent,
    TjsStringConcatenationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
