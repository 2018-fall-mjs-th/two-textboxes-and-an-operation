import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EaMultTwoNumbersComponent } from './ea-mult-two-numbers.component';

describe('EaMultTwoNumbersComponent', () => {
  let component: EaMultTwoNumbersComponent;
  let fixture: ComponentFixture<EaMultTwoNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EaMultTwoNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EaMultTwoNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
