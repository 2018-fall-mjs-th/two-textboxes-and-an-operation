import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenOperationComponent } from './ben-operation.component';

describe('BenOperationComponent', () => {
  let component: BenOperationComponent;
  let fixture: ComponentFixture<BenOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
