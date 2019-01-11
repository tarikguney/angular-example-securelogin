import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureLoginComponent } from './secure-login.component';

describe('SecureLoginComponent', () => {
  let component: SecureLoginComponent;
  let fixture: ComponentFixture<SecureLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
