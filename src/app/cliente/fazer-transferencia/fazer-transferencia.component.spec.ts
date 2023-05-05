import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazerTransferenciaComponent } from './fazer-transferencia.component';

describe('FazerTransferenciaComponent', () => {
  let component: FazerTransferenciaComponent;
  let fixture: ComponentFixture<FazerTransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FazerTransferenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FazerTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
