import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KcsComponentComponent } from './kcs-component.component';

describe('KcsComponentComponent', () => {
  let component: KcsComponentComponent;
  let fixture: ComponentFixture<KcsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KcsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KcsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
