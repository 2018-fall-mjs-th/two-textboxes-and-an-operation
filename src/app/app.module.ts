import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TjsAddNumbersComponent } from './tjs-add-numbers/tjs-add-numbers.component';
import { AburnsStringSurgeryComponent } from './aburns-string-surgery/aburns-string-surgery.component';
import { SylvieModuloComponent } from './sylvie-modulo/sylvie-modulo.component';
import { JlDiceRollerComponent } from './jl-dice-roller/jl-dice-roller.component';
import { GwbNumberMultiplicationComponent } from './gwb-number-multiplication/gwb-number-multiplication.component';
import { MkcPowerComponent } from './mkc-power/mkc-power.component';
import { EaMultTwoNumbersComponent } from './ea-mult-two-numbers/ea-mult-two-numbers.component';
import { PskNumberSubtractionComponent } from './psk-number-subtraction/psk-number-subtraction.component';
import { IlemkeNumbersThingComponent } from './ilemke-numbers-thing/ilemke-numbers-thing.component';
import { MatrixService } from './ilemke-numbers-thing/mtrx.service';
import { Lm2IntToHexComponent } from './lm2-int-to-hex/lm2-int-to-hex.component';
import { KcsComponentComponent } from './kcs-component/kcs-component.component';
import { MsaAddNumbersComponent } from './msa-add-numbers/msa-add-numbers.component';
import { TjsNumberAddition2Component } from './tjs-number-addition2/tjs-number-addition2.component';
import { BenOperationComponent } from './ben-operation/ben-operation.component';
import { TwoTextBoxesAndADropDownComponent } from './two-text-boxes-and-adrop-down/two-text-boxes-and-adrop-down.component';
import { TjsNumberSubtractComponent } from './tjs-number-subtract/tjs-number-subtract.component';
import { MamareNumberDivisionComponent } from './mamare-number-division/mamare-number-division.component';
import { RdSearchStringComponent } from './rd-search-string/rd-search-string.component';
import { TjsStringConcatenationComponent } from './tjs-string-concatenation/tjs-string-concatenation.component';
import { EllisTakeTwoEqualityComponent } from './ellis-take-two-equality/ellis-take-two-equality.component';
import { TomsFunStuffComponent } from './toms-fun-stuff/toms-fun-stuff.component';

@NgModule({
  declarations: [
    AppComponent,
    TjsAddNumbersComponent,
    AburnsStringSurgeryComponent,
    SylvieModuloComponent,
    JlDiceRollerComponent,
    GwbNumberMultiplicationComponent,
    MkcPowerComponent,
    EaMultTwoNumbersComponent,
    PskNumberSubtractionComponent,
    IlemkeNumbersThingComponent,
    Lm2IntToHexComponent,
    KcsComponentComponent,
    MsaAddNumbersComponent,
    TjsNumberAddition2Component,
    BenOperationComponent,
    TwoTextBoxesAndADropDownComponent,
    TjsNumberSubtractComponent,
    MamareNumberDivisionComponent,
    RdSearchStringComponent,
    TjsStringConcatenationComponent,
    EllisTakeTwoEqualityComponent,
    TomsFunStuffComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MatrixService],
  bootstrap: [AppComponent]
})
export class AppModule { }
