import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MkcPowerComponent } from './mkc-power.component';

describe('MkcPowerComponent', () => {
  let component: MkcPowerComponent;
  let fixture: ComponentFixture<MkcPowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MkcPowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MkcPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
