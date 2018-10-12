import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EllisTakeTwoEqualityComponent } from './ellis-take-two-equality.component';

describe('EllisTakeTwoEqualityComponent', () => {
  let component: EllisTakeTwoEqualityComponent;
  let fixture: ComponentFixture<EllisTakeTwoEqualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EllisTakeTwoEqualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EllisTakeTwoEqualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
