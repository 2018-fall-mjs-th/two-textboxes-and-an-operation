import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TjsAddNumbersComponent } from './tjs-add-numbers/tjs-add-numbers.component';
import { IlemkeNumbersThingComponent } from './ilemke-numbers-thing/ilemke-numbers-thing.component';
import { MatrixService } from './ilemke-numbers-thing/mtrx.service';

@NgModule({
  declarations: [
    AppComponent,
    TjsAddNumbersComponent,
    IlemkeNumbersThingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MatrixService],
  bootstrap: [AppComponent]
})
export class AppModule { }
