import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordInputsComponent } from './password-inputs.component';

describe('PasswordInputsComponent', () => {
  let component: PasswordInputsComponent;
  let fixture: ComponentFixture<PasswordInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordInputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
