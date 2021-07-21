import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersonPhoneComponent } from './create-person-phone.component';

describe('CreatePersonPhoneComponent', () => {
  let component: CreatePersonPhoneComponent;
  let fixture: ComponentFixture<CreatePersonPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePersonPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePersonPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
