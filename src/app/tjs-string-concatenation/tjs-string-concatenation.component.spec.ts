import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TjsStringConcatenationComponent } from './tjs-string-concatenation.component';

describe('TjsStringConcatenationComponent', () => {
  let component: TjsStringConcatenationComponent;
  let fixture: ComponentFixture<TjsStringConcatenationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TjsStringConcatenationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TjsStringConcatenationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
