import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PskNumberSubtractionComponent } from './psk-number-subtraction.component';

describe('PskNumberSubtractionComponent', () => {
  let component: PskNumberSubtractionComponent;
  let fixture: ComponentFixture<PskNumberSubtractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PskNumberSubtractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PskNumberSubtractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
