import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MamareNumberDivisionComponent } from './mamare-number-division.component';

describe('MamareNumberDivisionComponent', () => {
  let component: MamareNumberDivisionComponent;
  let fixture: ComponentFixture<MamareNumberDivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MamareNumberDivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MamareNumberDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
