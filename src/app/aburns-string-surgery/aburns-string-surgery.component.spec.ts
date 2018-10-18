import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AburnsStringSurgeryComponent } from './aburns-string-surgery.component';

describe('AburnsStringSurgeryComponent', () => {
  let component: AburnsStringSurgeryComponent;
  let fixture: ComponentFixture<AburnsStringSurgeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AburnsStringSurgeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AburnsStringSurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
