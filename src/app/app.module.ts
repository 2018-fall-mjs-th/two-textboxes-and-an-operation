import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TjsAddNumbersComponent } from './tjs-add-numbers/tjs-add-numbers.component';
import { MsaAddNumbersComponent } from './msa-add-numbers/msa-add-numbers.component';
import { TjsNumberAddition2Component } from './tjs-number-addition2/tjs-number-addition2.component';
import { BenOperationComponent } from './ben-operation/ben-operation.component';
import { TwoTextBoxesAndADropDownComponent } from './two-text-boxes-and-adrop-down/two-text-boxes-and-adrop-down.component';
import { TjsNumberSubtractComponent } from './tjs-number-subtract/tjs-number-subtract.component';
import { MamareNumberDivisionComponent } from './mamare-number-division/mamare-number-division.component';
import { RdSearchStringComponent } from './rd-search-string/rd-search-string.component';
import { TjsStringConcatenationComponent } from './tjs-string-concatenation/tjs-string-concatenation.component';

@NgModule({
  declarations: [
    AppComponent,
    TjsAddNumbersComponent,
    MsaAddNumbersComponent,
    TjsNumberAddition2Component,
    BenOperationComponent,
    TwoTextBoxesAndADropDownComponent,
    TjsNumberSubtractComponent,
    MamareNumberDivisionComponent,
    RdSearchStringComponent,
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
