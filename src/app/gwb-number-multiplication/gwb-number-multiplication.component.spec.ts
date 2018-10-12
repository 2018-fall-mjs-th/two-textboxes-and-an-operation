import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwbNumberMultiplicationComponent } from './gwb-number-multiplication.component';

describe('GwbNumberMultiplicationComponent', () => {
  let component: GwbNumberMultiplicationComponent;
  let fixture: ComponentFixture<GwbNumberMultiplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwbNumberMultiplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwbNumberMultiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
