import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpropertyComponent } from './formproperty.component';

describe('FormpropertyComponent', () => {
  let component: FormpropertyComponent;
  let fixture: ComponentFixture<FormpropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormpropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
