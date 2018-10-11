import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtractNumbersComponent } from './subtract-numbers.component';

describe('SubtractNumbersComponent', () => {
  let component: SubtractNumbersComponent;
  let fixture: ComponentFixture<SubtractNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtractNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtractNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
