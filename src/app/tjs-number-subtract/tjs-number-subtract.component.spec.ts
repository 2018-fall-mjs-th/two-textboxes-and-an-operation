import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TjsNumberSubtractComponent } from './tjs-number-subtract.component';

describe('TjsNumberSubtractComponent', () => {
  let component: TjsNumberSubtractComponent;
  let fixture: ComponentFixture<TjsNumberSubtractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TjsNumberSubtractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TjsNumberSubtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
