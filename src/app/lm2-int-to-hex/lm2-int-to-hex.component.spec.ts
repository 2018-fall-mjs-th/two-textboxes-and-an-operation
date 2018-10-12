import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lm2IntToHexComponent } from './lm2-int-to-hex.component';

describe('Lm2IntToHexComponent', () => {
  let component: Lm2IntToHexComponent;
  let fixture: ComponentFixture<Lm2IntToHexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lm2IntToHexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lm2IntToHexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
