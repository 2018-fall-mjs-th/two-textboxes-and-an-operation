import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdSearchStringComponent } from './rd-search-string.component';

describe('RdSearchStringComponent', () => {
  let component: RdSearchStringComponent;
  let fixture: ComponentFixture<RdSearchStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdSearchStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdSearchStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
