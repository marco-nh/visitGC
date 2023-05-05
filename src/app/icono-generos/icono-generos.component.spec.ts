import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconoGenerosComponent } from './icono-generos.component';

describe('IconoGenerosComponent', () => {
  let component: IconoGenerosComponent;
  let fixture: ComponentFixture<IconoGenerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconoGenerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconoGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
