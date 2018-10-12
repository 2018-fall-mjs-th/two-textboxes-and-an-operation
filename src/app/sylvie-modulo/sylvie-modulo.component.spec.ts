import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SylvieModuloComponent } from './sylvie-modulo.component';

describe('SylvieModuloComponent', () => {
  let component: SylvieModuloComponent;
  let fixture: ComponentFixture<SylvieModuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SylvieModuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SylvieModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
