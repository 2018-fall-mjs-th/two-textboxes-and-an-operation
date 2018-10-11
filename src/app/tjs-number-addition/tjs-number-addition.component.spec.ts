import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TjsNumberAdditionComponent } from './tjs-number-addition.component';

describe('TjsNumberAdditionComponent', () => {
  let component: TjsNumberAdditionComponent;
  let fixture: ComponentFixture<TjsNumberAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TjsNumberAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TjsNumberAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
