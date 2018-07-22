import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelhijoComponent } from './modelhijo.component';

describe('ModelhijoComponent', () => {
  let component: ModelhijoComponent;
  let fixture: ComponentFixture<ModelhijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelhijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelhijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
