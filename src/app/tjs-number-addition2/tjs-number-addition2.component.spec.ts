import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TjsNumberAddition2Component } from './tjs-number-addition2.component';

describe('TjsNumberAddition2Component', () => {
  let component: TjsNumberAddition2Component;
  let fixture: ComponentFixture<TjsNumberAddition2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TjsNumberAddition2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TjsNumberAddition2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
