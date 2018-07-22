import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelpapaComponent } from './modelpapa.component';

describe('ModelpapaComponent', () => {
  let component: ModelpapaComponent;
  let fixture: ComponentFixture<ModelpapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelpapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelpapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
