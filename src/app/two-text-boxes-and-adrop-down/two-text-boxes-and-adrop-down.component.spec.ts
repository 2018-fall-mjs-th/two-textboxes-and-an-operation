import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoTextBoxesAndADropDownComponent } from './two-text-boxes-and-adrop-down.component';

describe('TwoTextBoxesAndADropDownComponent', () => {
  let component: TwoTextBoxesAndADropDownComponent;
  let fixture: ComponentFixture<TwoTextBoxesAndADropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoTextBoxesAndADropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoTextBoxesAndADropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
