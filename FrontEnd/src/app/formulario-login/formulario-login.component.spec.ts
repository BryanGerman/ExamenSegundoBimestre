import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLoginComponent } from './formulario-login.component';

describe('FormularioLoginComponent', () => {
  let component: FormularioLoginComponent;
  let fixture: ComponentFixture<FormularioLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
