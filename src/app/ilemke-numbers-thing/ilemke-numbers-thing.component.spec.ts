import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlemkeNumbersThingComponent } from './ilemke-numbers-thing.component';

describe('IlemkeNumbersThingComponent', () => {
  let component: IlemkeNumbersThingComponent;
  let fixture: ComponentFixture<IlemkeNumbersThingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlemkeNumbersThingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlemkeNumbersThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
