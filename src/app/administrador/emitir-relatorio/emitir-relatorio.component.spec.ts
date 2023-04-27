import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitirRelatorioComponent } from './emitir-relatorio.component';

describe('EmitirRelatorioComponent', () => {
  let component: EmitirRelatorioComponent;
  let fixture: ComponentFixture<EmitirRelatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmitirRelatorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmitirRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
