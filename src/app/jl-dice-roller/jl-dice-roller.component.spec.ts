import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JlDiceRollerComponent } from './jl-dice-roller.component';

describe('JlDiceRollerComponent', () => {
  let component: JlDiceRollerComponent;
  let fixture: ComponentFixture<JlDiceRollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JlDiceRollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JlDiceRollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
