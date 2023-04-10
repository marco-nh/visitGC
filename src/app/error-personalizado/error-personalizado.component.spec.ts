import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPersonalizadoComponent } from './error-personalizado.component';

describe('ErrorPersonalizadoComponent', () => {
  let component: ErrorPersonalizadoComponent;
  let fixture: ComponentFixture<ErrorPersonalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPersonalizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorPersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
