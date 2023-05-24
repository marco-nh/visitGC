import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaPerfilPage } from './pagina-perfil.page';

describe('PaginaPerfilPage', () => {
  let component: PaginaPerfilPage;
  let fixture: ComponentFixture<PaginaPerfilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaginaPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
