import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateformComponent } from './createform.component';

describe('CreateformComponent', () => {
  let component: CreateformComponent;
  let fixture: ComponentFixture<CreateformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
