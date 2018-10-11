import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsaAddNumbersComponent } from './msa-add-numbers.component';

describe('MsaAddNumbersComponent', () => {
  let component: MsaAddNumbersComponent;
  let fixture: ComponentFixture<MsaAddNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsaAddNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsaAddNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
