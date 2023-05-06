import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejeitarClienteComponent } from './rejeitar-cliente.component';

describe('RejeitarClienteComponent', () => {
  let component: RejeitarClienteComponent;
  let fixture: ComponentFixture<RejeitarClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejeitarClienteComponent]
    });
    fixture = TestBed.createComponent(RejeitarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
