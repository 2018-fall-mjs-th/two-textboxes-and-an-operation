import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomsFunStuffComponent } from './toms-fun-stuff.component';

describe('TomsFunStuffComponent', () => {
  let component: TomsFunStuffComponent;
  let fixture: ComponentFixture<TomsFunStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomsFunStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomsFunStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
