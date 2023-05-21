import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LugarPage } from './lugar.page';

describe('LugarPage', () => {
  let component: LugarPage;
  let fixture: ComponentFixture<LugarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LugarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
